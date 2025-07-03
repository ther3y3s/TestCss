// Patch to add Twitch reward redemption events to simulation.js

// Add to your list of event types:
const EVENT_TYPES = [
  "follow", "subscription", "cheer", "raid", "reward_redeem" // added
];

// Add to your event generator:
function generateRandomEvent() {
  const type = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)];

  switch (type) {
    case "follow":
      return { type, user: getRandomUsername(), timestamp: Date.now() };
    case "subscription":
      return { type, user: getRandomUsername(), tier: "Prime", timestamp: Date.now() };
    case "cheer":
      return { type, user: getRandomUsername(), bits: 100, timestamp: Date.now() };
    case "raid":
      return { type, user: getRandomUsername(), viewers: 42, timestamp: Date.now() };
    case "reward_redeem":
      return {
        type,
        user: getRandomUsername(),
        reward: {
          title: "Bevi acqua 💧",
          cost: 1500
        },
        timestamp: Date.now()
      };
  }
}

// Show event label handler
function showEventLabel(message, dataType = "generic") {
  const eventDiv = document.createElement("font");
  eventDiv.innerText = message;
  eventDiv.dataset.type = dataType;
  document.querySelector("main > div.event > div.events").appendChild(eventDiv);
}

// Render logic for each event
function renderEvent(event) {
  switch (event.type) {
    case "follow":
      showEventLabel(`${event.user} ha iniziato a seguirti`, "follower");
      break;
    case "subscription":
      showEventLabel(`${event.user} si è abbonato con ${event.tier}`, "subscriber");
      break;
    case "cheer":
      showEventLabel(`${event.user} ha fatto cheer con ${event.bits} bit`, "cheer");
      break;
    case "raid":
      showEventLabel(`${event.user} ha fatto raid con ${event.viewers} spettatori`, "raid");
      break;
    case "reward_redeem":
      showEventLabel(`${event.user} ha riscattato: ${event.reward.title}`, "reward");
      break;
  }
}

// Add CSS for reward event if needed (injected or via <style>)
const style = document.createElement("style");
style.textContent = `
  font[data-type=reward] {
    --event-font-color: #ffffff;
    --event-color: #54c5ff;
  }
`;
document.head.appendChild(style);
