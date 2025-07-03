// Estensione del tuo script originale per simulare anche i Channel Points Redeem

// === CONFIG ===
let SE = false,
  provider = 'twitch',
  channel = '',
  currency = '$',
  mainDiv = 'main',
  cfFile = 'cf.json',
  consoleColorsEnabled = true,
  intervals = [],
  fields = {},
  queue;

// === EVENT TYPES ===
const availableEvents = ['redeem']; // aggiunto 'redeem'

// === CHAT SETTINGS ===
let maxMessageLength = 0,
  maxRows = 12;

// === DATI SIMULATI ===
const data = {
  names: ['Alice', 'Bob', 'Charlie', 'Dana'], // esemplificato
  messages: ['Let’s go!', 'Nice play!', 'GG', 'What a move!'],
  listeners: ['follower', 'host', 'cheer', 'subscriber', 'tip', 'raid', 'superchat', 'sponsor', 'redeem'],
  redeems: [
    { id: 'r1', title: 'Hydrate!', cost: 100, image: 'https://example.com/hydrate.png' },
    { id: 'r2', title: 'Dance Break', cost: 500, image: 'https://example.com/dance.png' }
  ],
  simulation: {
    enabled: true,
    delays: { max: 5000, min: 2000 },
    chances: { message: 50, event: 30, redeem: 20, double: 10 }
  }
};

// === SIMULAZIONE ===
const simulation = {
  generate() {
    widget.success('Simulazione avviata');
    simulation.start.run();
  },

  start: {
    run() {
      const run = async () => {
        const { enabled, chances, delays } = data.simulation;
        if (!enabled) return;

        const delay = simulation.functions.randomValue(delays.max, delays.min);
        const roll = simulation.functions.randomValue(100);

        if (roll < chances.redeem) {
          const event = simulation.start.mockRedeem();
          simulation.start.dispatch('channelPointsCustomReward', event);
        } else if (roll < chances.redeem + chances.event) {
          const event = simulation.start.mockEvent();
          simulation.start.dispatch('onEventReceived', event);
        } else {
          const event = simulation.start.mockMessage();
          simulation.start.dispatch('onMessage', event);
        }

        if (simulation.functions.randomValue(100) < chances.double) {
          setTimeout(run, 200); // simulazione doppia
        }

        setTimeout(run, delay);
      };

      run();
    },

    mockRedeem() {
      const user = simulation.functions.randomElement(data.names);
      const reward = simulation.functions.randomElement(data.redeems);
      return {
        detail: {
          user,
          reward,
          cost: reward.cost,
          image: reward.image,
          timestamp: Date.now()
        }
      };
    },

    mockEvent() {
      const name = simulation.functions.randomElement(data.names);
      return {
        detail: {
          type: 'subscriber',
          name,
          amount: simulation.functions.randomValue(10, 1)
        }
      };
    },

    mockMessage() {
      return {
        detail: {
          user: simulation.functions.randomElement(data.names),
          message: simulation.functions.randomElement(data.messages)
        }
      };
    },

    dispatch(eventName, detail) {
      window.dispatchEvent(new CustomEvent(eventName, detail));
      widget.info(`Dispatched: ${eventName}`);
    }
  },

  functions: {
    randomValue(max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
};

// === CONSOLE LOG UTILITY ===
const widget = {
  success(msg) {
    console.log('%c' + msg, 'color: white; background: green; padding: 4px;');
  },
  info(msg) {
    console.log('%c' + msg, 'color: gray; font-style: italic;');
  },
  warn(msg) {
    console.log('%c' + msg, 'color: red; background: yellow;');
  }
};

// === AVVIO ===
document.addEventListener('DOMContentLoaded', () => {
  simulation.generate();
});
