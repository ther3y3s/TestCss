/**          _                 _       _   _
         ___(_)_ __ ___  _   _| | __ _| |_(_) ___  _ __
        / __| | '_ ` _ \| | | | |/ _` | __| |/ _ \| '_ \
        \__ \ | | | | | | |_| | | (_| | |_| | (_) | | | |
        |___/_|_| |_| |_|\__,_|_|\__,_|\__|_|\___/|_| |_|
        5.3.0
*/

/**
 * Capitalize, Lowercase and Uppercase update
 */

// Widget Settings

let SE = false,
  provider = 'twitch',
  channel = '',
  currency = '$',
  mainDiv = 'main',
  cfFile = 'cf.json',
  consoleColorsEnabled = true,
  intervals = [],
  fields = {},
  queue

// Event Settings

const availableEvents = []

// Chat Settings

let maxMessageLength = 0,
  maxRows = 12

// Data

const data = {
  names: [
    'Red',
    'Triz',
    'UPdsn',
    'fxmiz',
    'jpdrx',
    'Smoth',
    'Polak',
    'Vgart',
    'lvigi',
    'leomd',
    'boltz',
    '_m44u_',
    'fzkgg_',
    'opkdsg',
    'wiixiy',
    'nuenie',
    'Zuxyer',
    'txnhao',
    'coys_3',
    'vlgkel',
    'WsDudu',
    'OZypey',
    'V3NOT1',
    'ViKohn',
    '_samnv',
    'jujaps',
    'TH4UAN',
    'deuz_i',
    'Tixyel',
    'Galaxy',
    'Mattos',
    'Norton',
    'Rosani',
    'queenb',
    'Junior',
    'AXEIAA',
    'gaules',
    'JooYune',
    'ttvEsha',
    'ZenX_01',
    'Rosuwon',
    'ao1fe_x',
    'CupieVT',
    'xSynnVT',
    'ANXlE7Y',
    'Vittan_',
    'NixLyyy',
    'urie_s2',
    'G4ndzin',
    'howkafx',
    'zynnowk',
    'roryvlr',
    'choke7_',
    'gbsora_',
    'Faayzfx',
    'yDanii_',
    'vryhoth',
    'isahyun',
    'Noolps1',
    '_srtutu',
    'IagoC__',
    'koolyct',
    'okaiz4r',
    'YaCM_13',
    'KiboxBr',
    'OTarzao',
    'PdrArts',
    'kikolca',
    'foxxvlr',
    'lobavlr',
    'st6nefx',
    'pnglife',
    'sardse_',
    'Mortauu',
    'ronykkj',
    'lestfps',
    'Almeida',
    'Sanches',
    'Krteazy',
    'Pnglife',
    'Tiba041',
    'RattoON',
    'Maraiso',
    'arielzij',
    'Qusahari',
    'CrevLMTV',
    'MynnYori',
    'miaoppii',
    'vanakwen',
    'BeniArts',
    'magialle',
    'Kimie_VT',
    'linxstre',
    'DukaKaii',
    'Ryn_Grim',
    'fillolvr',
    'Ekharynn',
    'ashtetiq',
    'leiyicat',
    '_soshiya',
    'DexPixel',
    'MrGrayve',
    'LuccuaVT',
    'MisttyVT',
    'Uaabafet',
    'Revernry',
    'LuxDS_06',
    'MifuyuVT',
    'bambi_za',
    'Webzihao',
    'Murilows',
    'immrtali',
    'Hybbaron',
    'foimaull',
    'red_dsgn',
    'Lamb_nhi',
    'Vg_artbr',
    'IitsEcho',
    'eoshigas',
    'jaduska_',
    'idiegu1n',
    'Telmo369',
    'lucsagui',
    'catsuumi',
    'xChierix',
    'SrRedfox',
    'TrizNery',
    'SnowKin4',
    'Z3NILUYT',
    'Gold3nz_',
    'nandadzn',
    'ZDesiign',
    'jubssz__',
    'ZeonArtz',
    'maraiso_',
    'hericpng',
    'm11111ca',
    'morskuba',
    'NexuusSz',
    'pqpSpace',
    'ApelaoLt',
    'JuannDmc',
    'ZerandoP',
    '_Notizin',
    'Tok1nOFC',
    'satokkkj',
    'inc_stst',
    '2_milhao',
    'FuyukiBr',
    'bia_urie',
    'Ameriicz',
    'Aliceigl',
    'Mbheartt',
    'SirLucas',
    'PreviaXD',
    'Nathykaa',
    'casimito',
    'ofjaaaah',
    'babxanny',
    'G0ularte',
    'alanzoka',
    'gafallen',
    'ViaNna3D',
    'KohzieVT',
    'feya_kun',
    'BleachFX',
    'Suwugitan',
    'JustKaizi',
    'Chakaleit',
    'dunkston_',
    '_honeykki',
    'Seiryu_ch',
    'Midonyaco',
    'Thaydraws',
    'pocky1898',
    'NaginoyVT',
    'DariaNirr',
    'AyanaaKai',
    'catsember',
    'jhonzzera',
    'lleeon_14',
    'milaeshop',
    'caoinrose',
    '_Strawbea',
    'Pipuzinha',
    'ShiroHomu',
    'Pandhoras',
    'dietrieee',
    'keronniem',
    'elpatino_',
    'stormhue0',
    'irafisxxx',
    'sayonanii',
    'Th_Alex21',
    'Tostetti_',
    'Mestre_MX',
    'Chuckofc_',
    '_vitormax',
    'BigBravoX',
    'mattscrtr',
    'DESESPER0',
    'eliseu_sc',
    'axaxxsxac',
    'RaffaDzn_',
    'Marcrakee',
    'DznMattos',
    'digui_dex',
    'brenexogc',
    'nortonvfx',
    'yuiboboca',
    'triczinho',
    'Sanziitos',
    'sirnivass',
    'AdesArts1',
    'KarlTSDZN',
    'HypeNeony',
    'Frikizin1',
    'JSilvers_',
    'jpuchiha7',
    'LghSharps',
    'duckctive',
    'AleThumbs',
    'MonterDzn',
    'shotzjpeg',
    'richyytws',
    'pqpSteel_',
    'gabi_artz',
    'NielArtzz',
    'TeclaEdit',
    'Sayonanii',
    'Yasmallow',
    'Yuiboboca',
    'Pedruartz',
    'xSinetica',
    'Sayajimus',
    '_kimdixie',
    'its_peony',
    'ale_apoka',
    'insano_rj',
    'TheJottah',
    'animeidaa',
    'AssetShop_',
    'ItsAlegnna',
    'eusouza777',
    '_lisbethec',
    'xBLXCKCATx',
    'Robyiezito',
    'NinaMianya',
    'guinevescs',
    'HeyShallot',
    'ymadeline_',
    'IsaWatsonn',
    'JuriKohaku',
    'dresouza3d',
    'gyarugoyle',
    'touru9klub',
    'SeoriStrom',
    'FauxCherub',
    'ciciazinha',
    'lapandache',
    'killerq410',
    'hibiscoito',
    'kanykoyama',
    'decoplum18',
    'KiyoshiiVT',
    'clairstars',
    'raybeanosu',
    '_Jotinhas_',
    'Demon_Arca',
    'Demythical',
    'Havokwolfs',
    'grifforeal',
    'marisbragi',
    'rawrHarper',
    'pedruuartz',
    'MuriloSvaz',
    'Squeezinha',
    'KathyK2468',
    'Coffeez0W0',
    'dilopeess_',
    'artz_green',
    'imamarisss',
    'huntervfxx',
    'ChelySeong',
    'coIorgrade',
    'vegaz0rdtv',
    'Brbabrutus',
    'arielgmelo',
    'ImLisbelle',
    'FrancisPSD',
    'kaykyconst',
    'vinibarion',
    'KiidiMakes',
    'cassiojobz',
    'aneydesign',
    'urie_vault',
    'BrunoArtz_',
    'AlbiieryTm',
    'YnitzCloud',
    'KauanDzn__',
    'Arcanjodsn',
    'Sk3llyRBLX',
    'DznVicstar',
    'aiki_russo',
    'juliokapp_',
    'iGustavoo7',
    'Ky_TrixDZN',
    'Siclopinho',
    'shakeartss',
    'NCDletinho',
    'omgpollarr',
    'shyAkamori',
    'ZeROBADASS',
    'EuSouMattz',
    'dino__desu',
    'Alhoetereo',
    'rawrafaela',
    'DigitalFG_',
    'SpookySony',
    'digi_shell',
    '7Jessw99364',
    'enbyprincex',
    'MookoStudio',
    'Gough617222',
    'itzzcattpng',
    'SomieStudio',
    'HanaEnoteca',
    'KaplanKeaty',
    'jesuspankue',
    'Ravensieart',
    'designboyzz',
    'darkcityuki',
    'SweetSourly',
    'florevillew',
    'VorpalineVT',
    'RinxyaPlays',
    'NanasuAnone',
    'FlopyDesign',
    'SraParkYeol',
    'Sakurakat_3',
    'ellasix6six',
    'lucasslgado',
    'vikzinhalol',
    'PahruPahruu',
    'akamedekayn',
    'cyberbritto',
    'ViTvalorant',
    'iaeValdemar',
    'BlackWoolfz',
    'consigo_nao',
    'plfracassi_',
    'diogoshawty',
    'darkz_night',
    'PoisonHanno',
    'motionricks',
    'Elfoteimoso',
    'lucas_chaar',
    'iburuninhaa',
    'ZeniStudios',
    'ViniziinART',
    'Darkycreeps',
    'AncherArttz',
    'euachoqoluz',
    'LobaIlustra',
    'uTrevor10k_',
    'Endingsouls',
    'GabrizontsY',
    'FCdoJuanDmc',
    'L3_______00',
    'Vinycius_sz',
    'rzinn007_xp',
    'BanguelaDzn',
    'EndrewArtz_',
    'Igorr_limaa',
    'DorivaGames',
    'Jonas123424',
    'Motionclown',
    'Arielbluhmn',
    'karianneee_',
    'Shoata297701',
    'variavelazul',
    'LordVanBrave',
    'kaienpeppers',
    'Jasper_acc22',
    'wheresmahbed',
    'tholuez23048',
    'HestiaVrysko',
    'yukkiimiyuwu',
    'beeyoustream',
    'CarbauDannie',
    'lunastellara',
    'WirelessNova',
    'SaiyoStudios',
    'solindigital',
    'haatoshuchou',
    'Shizus_World',
    'MakoFujihara',
    'aleisteraoki',
    'Foxy_Crawler',
    'kaleochronis',
    'Livtriplesix',
    'nicklasaloka',
    'DaintyDollVT',
    'SylphVisuals',
    'Pomatomaster',
    'personal_chi',
    '_matheuscomh',
    'quindurrella',
    'XgamerDesign',
    'pietrobaudin',
    'neverland7v7',
    'LoboInMotion',
    'XandreVieira',
    'Bolanca_Loka',
    'Gold3nArtist',
    'gabrielbarge',
    'batatoncioXD',
    'TakuDesigner',
    'kevynzlucaix',
    'CreativeDeeL',
    'EImprovisada',
    'thailinhagmp',
    'PietroBaccin',
    'SkullConcept',
    'MariaFogueta',
    'nanagadesign',
    'RiceMary18665',
    'ThamiresOliMo',
    'HoodlumCallum',
    'jjunielove_VT',
    'Marcelinha_vr',
    'StellarDesing',
    'MarieRosedell',
    'IrrehTywyllch',
    'DarkSilver878',
    'jean_leitch53',
    'MeowTeaGaming',
    'sadboywthlptp',
    'STGZStudio_EN',
    'TheOmegaDrone',
    'YunaKitsunebi',
    'hidetaka_desu',
    'kinoko_vtuber',
    'http_negrette',
    'vulgo___waves',
    'Yitamii_Vesta',
    'marcobrunodev',
    'Mau_Velasques',
    'ThouArtPotato',
    'ReversyDesign',
    'bell_guterres',
    'girasunstudio',
    'innversemedia',
    'LightStudiios',
    'BaptisteOnWeb',
    'KallilAugusto',
    'fenix045gamer',
    'imRazvanBadea',
    'ArtsIncognita',
    'gomes_slooder',
    'Wellinton0071',
    'pe_drojoaquim',
    'wellnovamente',
    'RabbootArtist',
    'Mellziinhaaa_',
    'zPedro_Lomano',
    'EmediatoJulia',
    'GabrusDesigns',
    'Pimprovisada_',
    '0223Fernandes',
    'HDtvCreations',
    'PauloBatistta',
    'SenpaiBeanpie',
    'SoundAlertsApp',
    'Battle_Kitsune',
    'Yuki_Pendragon',
    'lourenadejesus',
    'talk_to_no_one',
    'ManWithTheSlap',
    'artofxelestina',
    'Angelina_Feroz',
    'carolartegamer',
    'gustavointenso',
    'sugarstreamfly',
    'AchieveDesigns',
    'ConcealedBones',
    'daniaparecido_',
    'Dayviddddddddd',
    'thelordsmankey',
    'FeeehSantos245',
    'HanterArqueiro',
    'CrimsonCatVTBR',
    'Walter29774079',
    'ninjastudiosGG',
    'ZerTwixe_Graph',
    'BruninhuDesign',
    'Mark_MJPlayers',
    'vitorcividanis',
    'OMEGA236640074',
    'fabiodesigneer',
    'DesignerLuucas',
    'valmybeloveddd',
    'oLipe_Designer',
    'ithalo08092007',
    'LuisaCoolSouza',
    'DankaCreations',
    'pinpicturesque',
    'AnAverageCaret',
    'Smoughson158611',
    'GiftschlangenVT',
    'BatesMelin45440',
    'SeamusFlem15770',
    'nargiskhatun360',
    'koch_shyla10730',
    'MadnessRedQuee1',
    'cleyton_jesus07',
    'ruru_gelirgwenn',
    'juansinisterrra',
    'thevictormacedo',
    'GABRIEL19829004',
    'ansiedadeprime_',
    'incognit_studio',
    'DanielA41788483',
    'PedroMa11842164',
    'eduardogamer213',
    'RmuloGomesDaSi8',
    'SHITPOS15592198',
    'ChampionSeriesB',
    'JulioLoureiro12',
    'romulobarbosart',
    'yBrayanDesigner',
    'joaofel06670837',
    'AlmeidaGraphics',
    'marcos1marcolin',
    'GustavoDezainer',
    'BoatardeConrado',
    'RobertoLimaTech',
  ],
  messages: [
    'CruW',
    'SSSsss',
    'SSSsss',
    'LUL LUL',
    'bUrself',
    'DarkMode',
    'PogChamp',
    'GlitchCat',
    'CruW ariW',
    'AngelThump',
    'BloodTrail',
    'You all rock',
    "Let's gooooo",
    'LesbianPride',
    'LUL :tf: ariW',
    'ariW ariW CruW',
    ':tf: ariW CruW',
    'DarkMode engaged',
    'TransgenderPride',
    'DarkMode PogChamo',
    'DarkMode activated',
    'DarkMode ariW CruW',
    'CruW DarkMode CruW',
    'DarkMode :tf: CruW',
    'CruW DarkMode :tf:',
    'CruW :tf: DarkMode',
    'DarkMode CruW CruW',
    'Spreading awareness',
    'For the win DarkMode',
    'PogChamp What a play',
    'D: DarkMode DarkMode',
    'Welcome to the stream',
    'AngelThump AngelThump',
    'LUL that was hilarious',
    'Embrace your true self',
    'Sneaky plays coming up',
    'This stream is awesome',
    'LUL that was too funny',
    'LUL that was hilarious',
    'DoritosChip snack time',
    'ConcernDoge PunchTrees',
    'CruW DarkMode DarkMode',
    'DarkMode CruW DarkMode',
    'TheIlluminati confirmed',
    'Welcome to the chatroom',
    'The chat is lit tonight',
    "Let's survive and thrive",
    'Embrace your true colors',
    'DarkMode :tf: PunchTrees',
    'The chat is on fire today',
    'Love is love LesbianPride',
    'The hype is real PogChamp',
    'TheIlluminati is watching',
    'CandianRage DarkMode :tf:',
    'CruW DarkMode ConcernDoge',
    'Spread love and acceptance',
    "How's everyone doing today",
    'DarkMode DarkMode DarkMode',
    "This game's story is so sad",
    'That fail was too funny LUL',
    'Epic clutch moment PogChamp',
    'BisexualPride in full force',
    "Let's make history together",
    'LesbianPride shining bright',
    'TheIlluminati is watching us',
    'SSSsss sneak attack incoming',
    'Celebrate diversity GayPride',
    "I can't believe I lost again",
    'Love is love Spread the love',
    'TransgenderPride all the way',
    'BisexualPride proud to be bi',
    'What an amazing play PogChamp',
    "I'm feeling the hype PogChamp",
    'SSSsss lurking in the shadows',
    'Ready for some intense action',
    'IntersexPride standing strong',
    'PogChamp what an amazing play',
    'SSSsss lurking in the shadows',
    'DarkMode DarkMode ConcernDoge',
    'NonbinaryPride here to support',
    'Time for some PogChamp moments',
    'PansexualPride showing support',
    'Proud and visible BisexualPride',
    "Can't get enough of this stream",
    'DarkMode DarkMode :tf: DarkMode',
    'NonbinaryPride representing here',
    'Anyone up for a snack DoritosChip',
    'The stream is glitching out again',
    "Who's ready for an epic adventure",
    'Shoutout to the amazing community',
    'BibleThump such a touching moment',
    "BloodTrail let's follow the trail",
    'Breaking stereotypes IntersexPride',
    'Proud to be part of this community',
    'PunchTrees survival mode activated',
    'Victory tastes so sweet FallWinning',
    "This game's ending is heartbreaking",
    'GlitchCat glitching into the stream',
    'AsexualPride celebrating our identity',
    'GlitchCat glitching through the stream',
    'GayPride spreading love and acceptance',
    'imGlitch experiencing technical issues',
    'GlitchCat has entered the chat DarkMode',
    'DarkMode engaged ready for the darkness',
    'GenderFluidPride embracing our true selves',
    'HeyGuys Have you seen the new emotes DarkMode',
    'The chat is blazing with excitement BloodTrail',
    'IntersexPride united and embracing our diversity',
    'That play was absolutely PogChamp my mind is blown',
    'TheIlluminati is always watching stay alert and aware',
    'NonbinaryPride proud of our unique identities and voices',
    "LUL I can't stop laughing this stream is pure comedy gold",
    'LesbianPride love is love and it deserves to be celebrated',
    'BisexualPride proud to be bi and breaking down stereotypes',
    "CookieTime for an epic gaming session! :tf: Let's go team!",
    "This stream is absolutely fantastic I can't get enough of it",
    'PansexualPride spreading love and acceptance across the chat',
    'GayPride a community filled with love support and visibility',
    "TransgenderPride let's stand together and support one another",
    'AsexualPride embracing our asexuality and finding empowerment',
    'DuckerZ for those funny moments. CatBag ready for the laughs!',
    'DuckerZ for those funny moments. CatBag ready for the laughs!',
    'GenderFluidPride expressing ourselves freely and authentically',
    "BroBalt, let's bttvNice and enjoy the stream together. bUrself",
    'DuckerZ What a play! CatBag ready for the victory celebration!',
    "DoritosChip it's snack time Can't resist those delicious snacks",
    'GlitchCat just glitched into the stream bringing extra excitement',
    'LesbianPride love is love and it deserves to be celebrated loudly',
    'DuckerZ for those unexpected moments. CatBag ready for surprises!',
    'DuckerZ for those unexpected moments. CatBag ready for surprises!',
    'SSSsss lurking in the shadows adding an extra thrill to the stream',
    "BibleThump such a heartwarming and emotional moment I'm tearing up",
    "BloodTrail let's follow the trail and uncover the mystery together",
    'IntersexPride proud of our unique bio and standing strong together',
    "PunchTrees survival mode activated Let's gather resources and build",
    'D: That unexpected plot twist got me haHAA! LuL moments all around.',
    "DarkMode activated let's embrace the darkness and dive into the game",
    'TransgenderPride spreading love and support to all our trans friends',
    "CandianRage unleashed! :tf: What's the last game that made you rage?",
    "CandianRage unleashed! :tf: What's the last game that made you rage?",
    "PansexualPride let's celebrate our diverse attractions and identities",
    'BroBalt bringing the hype. bttvNice Spread the positivity in the chat!',
    'BroBalt bringing the hype. bttvNice Spread the positivity in the chat!',
    'NonbinaryPride embracing our true selves and challenging societal norms',
    "GayPride love knows no boundaries let's celebrate love in all its forms",
    'BisexualPride proud to be bi erasing biphobia and promoting inclusivity',
    "CruW Let's navigate the gaming world together. cvHazmat Safety gear on!",
    'D: The plot thickens! haHAA Share your favorite game storyline with us!',
    "CruW Let's navigate the gaming world together. cvHazmat Safety gear on!",
    "CruW Let's navigate the gaming world together. cvHazmat Safety gear on!",
    'D: The plot thickens! haHAA Share your favorite game storyline with us!',
    "I'm absolutely loving this stream it's entertaining from start to finish",
    "CiGrip This game's storyline got me in ConcernDoge mode. What about you?",
    "CandianRage mode activated! :tf: What's your favorite gaming rage story?",
    "bUrself and enjoy the stream. c! What's your favorite gaming snack, folks?",
    'D: That unexpected turn got me haHAA! LuL Share your favorite game twists!',
    'AsexualPride embracing our asexuality understanding and accepting ourselves',
    "CruW Let's dive into the game with cvHazmat suits on! Safety first, gamers.",
    'c! Did someone say CandianRage? :tf: Things are getting intense in the game!',
    'D: The suspense got me haHAA! LuL Share your favorite gaming memory with us!',
    "bUrself and enjoy the stream. c! What's your favorite type of game to watch?",
    'bUrself and be awesome. c! What game has the best community in your opinion?',
    "bUrself and enjoy the stream. c! What's your favorite type of game to watch?",
    "CandianRage in the chat! :tf: What's the most frustrating game you've played?",
    "CookieTime for the dedicated gamers. :tf: What's your longest gaming session?",
    "CookieTime for the committed gamers. :tf: What's your all-time favorite game?",
    "CookieTime while we discuss our favorite emotes. :tf: What's your go-to emote?",
    'imGlitch experiencing some technical difficulties but still enjoying the stream',
    "AngelThump This game's emotional moments got me. ariW Share your in-game feels!",
    'CiGrip for those gripping scenes. ConcernDoge How do you cope with game stress?',
    "BroBalt spreading good vibes. bttvNice What's your favorite part of the stream?",
    "AngelThump This game's emotional moments got me. ariW Share your in-game feels!",
    'CiGrip for those gripping scenes. ConcernDoge How do you cope with game stress?',
    'GenderFluidPride expressing our fluid identities and breaking free from binaries',
    "CruW Let's explore new games together. cvHazmat Safety first, excitement second!",
    'CiGrip for the intense scenes. ConcernDoge How do you handle game-related stress?',
    'CiGrip for the gripping moments! ConcernDoge How do you handle intense game scenes?',
    'CookieTime for the committed gamers. :tf: What game are you currently obsessed with?',
    "BroBalt bringing those positive vibes. bttvNice Let's keep the chat friendly and fun!",
    "AngelThump This game's soundtrack is angelic. ariW Share your top gaming soundtracks!",
    "AngelThump This game's music is touching my soul. ariW Share your favorite gaming moment!",
    "Feeling the groove with catJAM in the background. ariW What's your favorite game soundtrack?",
  ],
  listeners: ['follower', 'host', 'cheer', 'subscriber', 'tip', 'raid', 'superchat', 'sponsor'],
  recents: [],
  badges: {
    '100 bits': {
      type: '100 bits',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/09d93036-e7ce-431c-9a9e-7044297133f2/3',
      description: '100 bits badge',
    },
    'no audio': {
      type: 'no audio',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/3',
      description: 'Individuals with unreliable or no sound can select this badge',
    },
    'no video': {
      type: 'no video',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/3',
      description: 'Individuals with unreliable or no video can select this badge',
    },
    'bot': {
      type: 'bot',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/df9095f6-a8a0-4cc2-bb33-d908c0adffb8/3',
      description: 'Twitch bot',
    },
    'twitch staff': {
      type: 'twitch staff',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/3',
      description: 'Twitch Staff',
    },
    'admins': {
      type: 'admins',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/3',
      description: 'Admins',
    },
    'artist': {
      type: 'artist',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3',
      description: 'Artist',
    },
    'game developer': {
      type: 'game developer',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/85856a4a-eb7d-4e26-a43e-d204a977ade4/3',
      description: 'Game Developer',
    },
    'prime': {
      type: 'prime',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/3',
      description: 'Prime',
    },
    'turbo': {
      type: 'turbo',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/3',
      description: 'Turbo',
    },
    'subscriber': {
      type: 'subscriber',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3',
      description: 'Subscriber',
    },
    'broadcaster': {
      type: 'broadcaster',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3',
      description: 'Broadcaster',
    },
    'verified': {
      type: 'verified',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3',
      description: 'Verified',
    },
    'moderator': {
      type: 'moderator',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
      description: 'Moderator',
    },
    'vip': {
      type: 'vip',
      version: '1',
      url: 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3',
      description: 'VIP',
    },
  },
  emotes: [
    {
      'type': 'twitch',
      'name': 'TransgenderPride',
      'id': '307827377',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/3.0',
      },
      'start': 0,
      'end': 15,
    },
    {
      'type': 'twitch',
      'name': 'PansexualPride',
      'id': '307827370',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/3.0',
      },
      'start': 17,
      'end': 30,
    },
    {
      'type': 'twitch',
      'name': 'NonbinaryPride',
      'id': '307827356',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/3.0',
      },
      'start': 32,
      'end': 45,
    },
    {
      'type': 'twitch',
      'name': 'LesbianPride',
      'id': '307827340',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/3.0',
      },
      'start': 47,
      'end': 58,
    },
    {
      'type': 'twitch',
      'name': 'IntersexPride',
      'id': '307827332',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/3.0',
      },
      'start': 60,
      'end': 72,
    },
    {
      'type': 'twitch',
      'name': 'GenderFluidPride',
      'id': '307827326',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/3.0',
      },
      'start': 74,
      'end': 89,
    },
    {
      'type': 'twitch',
      'name': 'GayPride',
      'id': '307827321',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/3.0',
      },
      'start': 91,
      'end': 98,
    },
    {
      'type': 'twitch',
      'name': 'BisexualPride',
      'id': '307827313',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/3.0',
      },
      'start': 100,
      'end': 112,
    },
    {
      'type': 'twitch',
      'name': 'AsexualPride',
      'id': '307827267',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/3.0',
      },
      'start': 114,
      'end': 125,
    },
    {
      'type': 'twitch',
      'name': 'PogChamp',
      'id': '305954156',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/3.0',
      },
      'start': 127,
      'end': 134,
    },
    {
      'type': 'twitch',
      'name': 'GlitchCat',
      'id': '304486301',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/3.0',
      },
      'start': 136,
      'end': 144,
    },
    {
      'type': 'twitch',
      'name': 'DarkMode',
      'id': '461298',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/3.0',
      },
      'start': 146,
      'end': 153,
    },
    {
      'type': 'twitch',
      'name': 'LUL',
      'id': '425618',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0',
      },
      'start': 155,
      'end': 157,
    },
    {
      'type': 'twitch',
      'name': 'TheIlluminati',
      'id': '145315',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/3.0',
      },
      'start': 159,
      'end': 171,
    },
    {
      'type': 'twitch',
      'name': 'imGlitch',
      'id': '112290',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/3.0',
      },
      'start': 173,
      'end': 180,
    },
    {
      'type': 'twitch',
      'name': 'DoritosChip',
      'id': '102242',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/3.0',
      },
      'start': 182,
      'end': 192,
    },
    {
      'type': 'twitch',
      'name': 'SSSsss',
      'id': '46',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/3.0',
      },
      'start': 194,
      'end': 199,
    },
    {
      'type': 'twitch',
      'name': 'PunchTrees',
      'id': '47',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/3.0',
      },
      'start': 201,
      'end': 210,
    },
    {
      'type': 'twitch',
      'name': 'BibleThump',
      'id': '86',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/86/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/86/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/86/default/dark/3.0',
      },
      'start': 212,
      'end': 221,
    },
    {
      'type': 'twitch',
      'name': 'BloodTrail',
      'id': '69',
      'gif': false,
      'urls': {
        '1': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/1.0',
        '2': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/2.0',
        '4': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/3.0',
      },
      'start': 223,
      'end': 232,
    },
    {
      'type': '7tv',
      'name': 'CookieTime',
      'id': '635b0184ea9ce7391cbf77d6',
      'gif': true,
      'animated': true,
      'urls': {
        '1': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/1x.webp',
        '2': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/2x.webp',
        '3': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/3x.webp',
        '4': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/4x.webp',
      },
      'start': 0,
      'end': 10,
      'coords': {
        'x': 0,
        'y': 0,
      },
    },
    {
      'type': 'bttv',
      'name': 'catJAM',
      'id': '5f1b0186cf6d2144653d2970',
      'gif': true,
      'animated': true,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x',
        '2': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/2x',
        '4': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x',
      },
      'start': 0,
      'end': 6,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': ':tf:',
      'id': '54fa8f1401e468494b85b537',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x',
        '2': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/2x',
        '4': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/3x',
      },
      'start': 7,
      'end': 11,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'AngelThump',
      'id': '566ca1a365dbbdab32ec055b',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/1x',
        '2': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/2x',
        '4': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/3x',
      },
      'start': 12,
      'end': 22,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 334,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'ariW',
      'id': '56fa09f18eff3b595e93ac26',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/1x',
        '2': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/2x',
        '4': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/3x',
      },
      'start': 23,
      'end': 27,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'BroBalt',
      'id': '54fbf00a01abde735115de5c',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/1x',
        '2': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/2x',
        '4': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/3x',
      },
      'start': 28,
      'end': 35,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 184,
        'height': 120,
      },
    },
    {
      'type': 'bttv',
      'name': 'bttvNice',
      'id': '54fab7d2633595ca4c713abf',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/1x',
        '2': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/2x',
        '4': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/3x',
      },
      'start': 36,
      'end': 44,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 168,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'bUrself',
      'id': '566c9f3b65dbbdab32ec052e',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/1x',
        '2': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/2x',
        '4': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/3x',
      },
      'start': 45,
      'end': 52,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'c!',
      'id': '6468f7acaee1f7f47567708e',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/1x',
        '2': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/2x',
        '4': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/3x',
      },
      'start': 53,
      'end': 55,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'CandianRage',
      'id': '54fbf09c01abde735115de61',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/1x',
        '2': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/2x',
        '4': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/3x',
      },
      'start': 56,
      'end': 67,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'CiGrip',
      'id': '54fa8fce01e468494b85b53c',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/1x',
        '2': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/2x',
        '4': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/3x',
      },
      'start': 68,
      'end': 74,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'ConcernDoge',
      'id': '566c9f6365dbbdab32ec0532',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/1x',
        '2': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/2x',
        '4': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/3x',
      },
      'start': 75,
      'end': 86,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 101,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'CruW',
      'id': '55471c2789d53f2d12781713',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/1x',
        '2': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/2x',
        '4': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/3x',
      },
      'start': 87,
      'end': 91,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'cvHazmat',
      'id': '5e76d338d6581c3724c0f0b2',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/1x',
        '2': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/2x',
        '4': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/3x',
      },
      'start': 92,
      'end': 100,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'D:',
      'id': '55028cd2135896936880fdd7',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x',
        '2': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/2x',
        '4': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/3x',
      },
      'start': 101,
      'end': 103,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'haHAA',
      'id': '555981336ba1901877765555',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/1x',
        '2': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/2x',
        '4': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/3x',
      },
      'start': 104,
      'end': 109,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'LuL',
      'id': '567b00c61ddbe1786688a633',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/1x',
        '2': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/2x',
        '4': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/3x',
      },
      'start': 110,
      'end': 113,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 112,
        'height': 112,
      },
    },
    {
      'type': 'bttv',
      'name': 'DuckerZ',
      'id': '573d38b50ffbf6cc5cc38dc9',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/1x',
        '2': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/2x',
        '4': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/3x',
      },
      'start': 114,
      'end': 121,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 149,
        'height': 112,
      },
    },
    {
      'type': 'ffz',
      'name': 'CatBag',
      'id': '25927',
      'gif': false,
      'animated': false,
      'urls': {
        '1': 'https://cdn.frankerfacez.com/emote/25927/1',
        '2': 'https://cdn.frankerfacez.com/emote/25927/2',
        '4': 'https://cdn.frankerfacez.com/emote/25927/4',
      },
      'start': 122,
      'end': 128,
      'coords': {
        'x': 0,
        'y': 0,
        'width': 143,
        'height': 128,
      },
    },
  ],
  events: [],
  simulation: {
    enabled: false,

    delays: { max: 2700, min: 700 },
    chances: { message: 75, event: 25, double: 10 },
  },
}

// Console

const widget = {
  consoleThemes: [
    { name: 'warn', background: '#bf2149', color: '#fff', bold: true, underline: false, fontSize: 22 },
    { name: 'success', background: '#33bf21', color: '#fff', bold: true, underline: false, fontSize: 22 },
    { name: 'alert', background: '#137cbd', color: '#fff', bold: true, underline: false, fontSize: 20 },
    { name: 'received', color: '#c3a7e2', bold: true, underline: false, fontSize: 18 },
    { name: 'simple', color: '#a7ade2', bold: false, underline: false, fontSize: 18 },
    { name: 'info', color: '#4e4e6a', bold: false, underline: false, fontSize: 12 },
    { name: 'table', type: 'table' },
    { name: 'log', color: '#fff' },
  ],

  generate(command, content) {
    const { background, color, bold, underline, fontSize, type } = this.consoleThemes.filter(({ name }) => name == command)[0],
      styles = []

    background && styles.push(`background-color: ${background}`)
    color && styles.push(`color: ${color}`)
    bold && styles.push(`font-weight: bold`)
    underline && styles.push(`text-decoration: underline`)
    fontSize && styles.push(`font-size: ${parseFloat(fontSize)}px`)

    let signal = consoleColorsEnabled ? '%c' : '',
      textContent = Array.from(content).filter((el) => ['string', 'number'].some((e) => typeof el == e)),
      objectContent = Array.from(content).filter((el) => !['string', 'number'].some((e) => typeof el == e)),
      css = consoleColorsEnabled == true && type != 'table' && textContent.length > 0 ? styles.join(';') : null

    return console[type || 'log'](...[textContent.length > 0 ? signal + textContent.join(' ') : null, css, ...objectContent].filter((el) => el))
  },

  warn() {
    this.generate('warn', arguments)
  },
  success() {
    this.generate('success', arguments)
  },
  alert() {
    this.generate('alert', arguments)
  },
  received() {
    this.generate('received', arguments)
  },
  simple() {
    this.generate('simple', arguments)
  },
  info() {
    this.generate('info', arguments)
  },
  table() {
    this.generate('table', arguments)
  },
  log() {
    this.generate('log', arguments)
  },
}

// Starting widget

$(document).ready(async () => {
  simulation.generate()
})

// Simulation

const simulation = {
  generate() {
    fetch('./' + cfFile)
      .then((res) => res.json())
      .then((fields) => {
        fields = this.start.fieldData(fields)

        window.dispatchEvent(new CustomEvent('onWidgetLoad', simulation.templates['onWidgetLoad'](fields)))

        widget.success(' CUSTOM FIELDS LOADED ')

        this.start.run()

        fields['debug'] && setTimeout(startSimulation, 1000)
      })
      .catch((err) => {
        SE = true
        widget.warn(' STREAM ELEMENTS DETECTED ', err)

        this.start.run()
      })
  },

  start: {
    run() {
      const { onEventReceived, onSessionUpdate } = simulation.templates

      const createQueue = () => {
        queue = new Queue()
          .setDuration(fields['widgetDuration'] || 0)
          .setCallback(({ event, data }) => window.dispatchEvent(new CustomEvent(event, data)))
      }

      SE && !queue && createQueue()

      const execute = async (type, listener) => {
        switch (type) {
          case 'session':
            newEvent('onSessionUpdate', await onSessionUpdate(), true)
            break

          case 'event':
            newEvent('onEventReceived', await onEventReceived(generateData({ listener: listener || 'random' })))
            break
        }
      }

      const run = async (first = false) => {
        const { enabled, chances, delays } = data.simulation
        const { randomValue, delayExecution } = simulation.functions

        let listener = 'random',
          delay = 0

        if (enabled) {
          SE && !queue && createQueue()

          listener = randomValue(100, 0)
          listener = listener < chances.event ? 'event' : listener < chances.message ? 'message' : 'random'
          delay = randomValue(delays.max, delays.min)

          await execute('event', listener)
          first ? await execute('session') : listener == 'event' && (await execute('session'))
          randomValue(100, 0) < chances.double && (await execute('event', 'random'))
        }

        delayExecution(delay).then(() => run())
      }

      run(true)
    },
    fieldData(fields) {
      return Object.entries(fields)
        .filter(([, { value }]) => value != undefined)
        .reduce((acc, [key, { value }]) => {
          acc[key] = value
          return acc
        }, {})
    },
    currency() {
      return simulation.functions.randomRelativeValue([
        { 'code': 'BRL', 'name': 'U.S. Dollar', 'symbol': 'R$' },
        { 'code': 'EUR', 'name': 'U.S. Dollar', 'symbol': '€' },
        { 'code': 'USD', 'name': 'U.S. Dollar', 'symbol': '$' },
      ])[0]
    },
    newRecents() {
      let { randomValue, randomRelativeValue, names, listeners } = { ...data, ...simulation.functions }

      for (let i = 0; i < 100; i++) {
        let defaultObject = {
          name: randomRelativeValue(names)[0],
          type: randomRelativeValue(listeners)[0],
        }

        defaultObject.type == 'subscriber' &&
          (defaultObject = {
            ...defaultObject,
            'amount': randomValue(100, 1),
            'avatar': 'https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-2.jpg',
            'providerId': '558677433',
            '_id': '65084c8283ee8e729836a534',
            'sessionTop': false,
            'originalEventName': 'subscriber-latest',
          })

        data.recents.push(defaultObject)
      }
    },
    session() {
      const { names, messages, getRecents, randomValue, randomRelativeValue } = { ...simulation.functions, ...data }

      return {
        'follower-latest': { 'name': randomRelativeValue(names)[0] },
        'follower-week': { 'count': randomValue(100, 1) },
        'follower-month': { 'count': randomValue(300, 100) },
        'follower-goal': { 'amount': randomValue(500, 300) },
        'follower-total': { 'count': randomValue(1000, 500) },
        'follower-session': { 'count': randomValue(100, 1) },

        'subscriber-latest': {
          'amount': randomValue(12),
          'avatar': 'https://cdn.streamelements.com/assets/dashboard/my-overlays/overlay-default-preview-2.jpg',
          'providerId': '558677433',
          'name': randomRelativeValue(names)[0],
          '_id': '65084c8283ee8e729836a534',
          'sessionTop': false,
          'type': 'subscriber',
          'originalEventName': 'subscriber-latest',
        },
        'subscriber-new-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(12),
          'message': randomRelativeValue(messages)[0],
        },
        'subscriber-resub-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(12),
          'message': randomRelativeValue(messages)[0],
        },
        'subscriber-gifted-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(50),
          'message': randomRelativeValue(messages)[0],
          'tier': '1000',
          'sender': randomRelativeValue(names)[0],
        },
        'subscriber-week': { 'count': randomValue(100, 1) },
        'subscriber-month': { 'count': randomValue(300, 100) },
        'subscriber-goal': { 'amount': randomValue(500, 300) },
        'subscriber-total': { 'count': randomValue(1000, 500) },
        'subscriber-points': { 'amount': randomValue(100000) },
        'subscriber-alltime-gifter': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(10000, 1000),
        },
        'subscriber-gifted-session': { 'count': randomValue(100, 1) },
        'subscriber-new-session': { 'count': randomValue(100, 1) },
        'subscriber-resub-session': { 'count': randomValue(100, 1) },
        'subscriber-session': { 'count': randomValue(100, 1) },

        'host-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000),
        },
        'raid-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000),
        },

        'cheer-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000),
        },
        'cheer-week': { 'amount': randomValue(100, 1) },
        'cheer-month': { 'amount': randomValue(1000, 100) },
        'cheer-goal': { 'amount': randomValue(10000, 1000) },
        'cheer-total': { 'amount': randomValue(100000, 10000) },
        'cheer-count': { 'count': randomValue(1000000, 100000) },
        'cheer-session': { 'amount': randomValue(100, 1) },
        'cheer-session-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheer-session-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheer-weekly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheer-weekly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheer-monthly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'cheer-monthly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'cheer-alltime-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(10000, 1000),
        },
        'cheer-alltime-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(10000, 1000),
        },

        'tip-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000),
        },
        'tip-week': { 'amount': randomValue(10, 0) },
        'tip-month': { 'amount': randomValue(50, 10) },
        'tip-goal': { 'amount': randomValue(100, 50) },
        'tip-total': { 'amount': randomValue(1000, 100) },
        'tip-count': { 'count': randomValue(1000, 100) },
        'tip-session': { 'amount': randomValue(100, 1) },
        'tip-session-top-donation': {
          'name': randomRelativeValue(names)[0],
          'count': randomValue(100, 1),
        },
        'tip-session-top-donator': {
          'name': randomRelativeValue(names)[0],
          'count': randomValue(100, 1),
        },
        'tip-weekly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'tip-weekly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'tip-monthly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'tip-monthly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000, 10),
        },
        'tip-alltime-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(10000, 1000),
        },
        'tip-alltime-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(10000, 1000),
        },

        'merch-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
          'items': [],
        },
        'merch-goal-orders': { 'amount': randomValue(1000) },
        'merch-goal-items': { 'amount': randomValue(50) },
        'merch-goal-total': { 'amount': randomValue(10000) },

        'tip-recent': getRecents('tip'),
        'host-recent': getRecents('host'),
        'raid-recent': getRecents('raid'),
        'cheer-recent': getRecents('cheer'),
        'merch-recent': getRecents('merch'),
        'follower-recent': getRecents('follower'),
        'superchat-recent': getRecents('superchat'),
        'subscriber-recent': getRecents('subscriber'),
        'cheerPurchase-recent': getRecents('cheerPurchase'),
        'charityCampaignDonation-recent': getRecents('charityCampaignDonation'),

        'purchase-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
          'avatar': '',
          'message': randomRelativeValue(messages)[0],
          'items': [],
        },

        'charityCampaignDonation-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-session-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-session-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-weekly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-weekly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-monthly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-monthly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-alltime-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'charityCampaignDonation-alltime-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },

        'cheerPurchase-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-session-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheerPurchase-session-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100, 1),
        },
        'cheerPurchase-weekly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-weekly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-monthly-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-monthly-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-alltime-top-donation': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },
        'cheerPurchase-alltime-top-donator': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(100),
        },

        'superchat-latest': {
          'name': randomRelativeValue(names)[0],
          'amount': randomValue(1000),
        },
        'superchat-week': { amount: randomValue(10, 0) },
        'superchat-month': { amount: randomValue(50, 10) },
        'superchat-goal': { amount: randomValue(100, 50) },
        'superchat-total': { amount: randomValue(1000, 100) },
        'superchat-count': { count: randomValue(1000, 100) },
        'superchat-session': { amount: randomValue(1000, 100) },
        'superchat-session-top-donation': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(1000, 100),
        },
        'superchat-session-top-donator': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(1000, 100),
        },
        'superchat-weekly-top-donation': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(10, 0),
        },
        'superchat-weekly-top-donator': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(10, 0),
        },
        'superchat-month-top-donation': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(50, 10),
        },
        'superchat-month-top-donator': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(50, 10),
        },
        'superchat-alltime-top-donation': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(100),
        },
        'superchat-alltime-top-donator': {
          name: randomRelativeValue(names)[0],
          amount: randomValue(100),
        },
      }
    },
  },

  functions: {
    delayExecution(ms = 0) {
      return new Promise((resolve) => setTimeout(resolve, ms > 100 ? ms : ms * 1000))
    },
    randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    },
    randomValue(max = 100, min = 0) {
      return ~~(Math.random() * ((max || 10000) - (min || 0)) + (min || 0))
    },
    randomRelativeValue(array = []) {
      if (Array.isArray(array)) {
        let index = ~~(Math.random() * array.length) || 0

        return [array[parseInt(index)], parseInt(index)]
      }
    },
    balanceValue(amount = 0, max = 100, min = 0) {
      return Math.max(min, Math.min(amount, max))
    },
    getRecents(event) {
      let type = event ? [event] : data.events

      return data.recents
        .map((recent) => {
          return {
            'name': recent.name,
            'createdAt': simulation.functions.randomDate(new Date(2022, 0, 1), new Date()).toJSON(),
            'type': recent.type,
          }
        })
        .sort((a, b) => new Date(b.createdAt - new Date(a.createdAt)))
        .filter((each) => type.includes(each.type))
    },
    async generateBadges(badges = []) {
      let max = simulation.functions.randomValue(4, 0)

      !Array.isArray(badges) && (badges = badges?.split(',').flatMap((el) => el.trim()))

      switch (provider) {
        case 'twitch':
          if (badges == 'random')
            for await (const _ of new Array(max).fill('')) {
              let current = simulation.functions.randomRelativeValue(Object.keys(data.badges))[0]

              !badges.includes(current) && Array.isArray(badges) ? badges.push(current) : (badges = [current])
            }

          badges = [
            Array.from(badges).filter((e) => Object.keys(data.badges).includes(e)),
            Array.from(badges)
              .slice(0, 3)
              .flatMap((badge) => data.badges[badge] || undefined)
              .filter((e) => Object.values(data.badges).includes(e)),
          ]
          break

        case 'youtube':
          let details = {
            'verified': { isVerified: true },
            'broadcaster': { isChatOwner: true },
            'host': { isChatOwner: true },
            'sponsor': { isChatSponsor: true },
            'subscriber': { isChatSponsor: true },
            'moderator': { isChatModerator: true },
          }

          if (badges == 'random')
            for await (const _ of new Array(max).fill('')) {
              let current = simulation.functions.randomRelativeValue(['host', 'verified', 'sponsor,', 'moderator'])[0]

              !badges.includes(current) && Array.isArray(badges) ? badges.push(current) : (badges = [current])
            }

          badges = [
            [
              Object.values(badges).reduce((acc, value) => {
                details[value] && (acc[Object.keys(details[value])[0]] = true)

                return acc
              }, {}),
            ],
            [],
          ]
          break
      }

      return badges
    },
    randomColor() {
      return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')}`
    },
  },

  templates: {
    'onWidgetLoad'(fields) {
      const { recents, currency, session, newRecents } = { ...simulation.functions, ...simulation.start, ...data }

      newRecents()

      return {
        detail: {
          channel: {
            username: 'Tixyel',
            apiToken: '',
            id: '5f86138379e301b42726444d',
            providerId: '558677433',
            avatar: '',
          },
          currency: currency(),
          fieldData: fields,
          recents,
          session: { data: session() },

          simulation: true,
        },
      }
    },
    async 'onSessionUpdate'() {
      const { session } = simulation.start

      return { detail: { session: session() } }
    },
    async 'onEventReceived'(options) {
      let { listener, name, message, badges, amount, color } = options

      const { names, randomValue, randomRelativeValue, generateBadges, emotes } = {
        ...simulation.functions,
        ...simulation.start,
        ...data,
      }

      badges = await generateBadges(badges)

      let events = {
          'twitch': {
            'follower': {
              unique: true,

              max: 1,
              min: 1,
            },
            'subscriber': {
              unique: true,

              gifted: true,
              community: true,
              message: true,

              max: 12,
              min: 1,
            },
            'tip': {
              message: true,

              max: 1000,
              min: 1,
            },
            'cheer': {
              message: true,

              max: 999,
              min: 1,
            },
            'raid': {
              max: 10000,
              min: 1,
            },

            'message': {
              listener: 'message',
              event: {
                service: 'twitch',
                data: {
                  time: Date.now(),
                  tags: {
                    'badge-info': `${Array.isArray(badges[0]) ? (badges[0].includes('subscriber') ? `subscriber/${randomValue(36, 1)}` : '') : ''}`,
                    'badges': Array.isArray(badges[0]) ? `${badges[0].join('/1,')}/1` : '',
                    'color': color,
                    'display-name': name,
                    'emotes': '',
                    'flags': '',
                    'id': '',
                    'mod': Array.isArray(badges[0]) ? (badges[0].includes('moderator') ? '1' : '0') : '',
                    'room-id': randomValue(10000000, 11111111).toString(),
                    'subscriber': Array.isArray(badges[0]) ? (badges[0].includes('subscriber') ? '1' : '0') : '',
                    'tmi-sent-ts': randomValue(10000000, 11111111).toString(),
                    'turbo': Array.isArray(badges[0]) ? (badges[0].includes('turbo') ? '1' : '0') : '',
                    'user-id': randomValue(10000000, 11111111).toString(),
                    'user-type': '',
                  },
                  nick: name.toLowerCase(),
                  displayName: name,
                  displayColor: color,
                  badges: Array.isArray(badges[1]) ? badges[1] : '',
                  channel: channel?.username,
                  text: message,
                  isAction: false,
                  userId: randomValue(10000000, 11111111).toString(),
                  msgId: randomValue(1000000000, 1111111111).toString(),
                  emotes: emotes,
                },
              },
            },
          },
          'youtube': {
            'subscriber': {},
            'tip': {},
            'superchat': {},
            'sponsor': {},

            'message': {
              listener: 'message',
              event: {
                service: 'youtube',
                data: {
                  kind: 'youtube#liveChatMessage',
                  etag: randomValue(1000000000, 1111111111).toString(),
                  id: randomValue(1000000000, 1111111111).toString(),

                  snippet: {
                    type: 'textMessageEvent',
                    liveChatId: randomValue(1000000000, 1111111111).toString(),
                    authorChannelId: randomValue(1000000000, 1111111111).toString(),
                    publishedAt: Date.now(),
                    hasDisplayContent: true,
                    displayMessage: message,
                    textMessageDetails: { messageText: message },
                  },
                  authorDetails: {
                    channelId: 'UCFNUE4SqIjF0mbznuYdYNQQ',
                    channelUrl: 'http://www.youtube.com/channel/UCFNUE4SqIjF0mbznuYdYNQQ',
                    displayName: name,
                    profileImageUrl: undefined,

                    isVerified: false,
                    isChatOwner: false,
                    isChatSponsor: false,
                    isChatModerator: false,

                    ...badges[0][0],
                  },

                  time: Date.now(),
                  tags: [],
                  nick: name.toLowerCase(),
                  displayName: name,
                  displayColor: null,
                  badges: [],
                  channel: 'UCFNUE4SqIjF0mbznuYdYNQQ',
                  text: message,
                  isAction: false,
                  userId: randomValue(10000000, 11111111).toString(),
                  msgId: randomValue(1000000000, 1111111111).toString(),
                  emotes: emotes,
                  avatar: undefined,
                },
              },
            },
          },
        },
        bases = {
          'twitch': {
            event: {
              items: [],
              tier: randomRelativeValue(['prime', '1000', '2000', '3000'])[0],
              month: new Date().toLocaleString('default', { month: 'long' }),
              isTest: true,
              sessionTop: false,
            },
          },
          'youtube': {},
        },
        listeners = {
          'twitch': ['message', 'subscriber', 'follower', 'tip', 'cheer', 'raid'],
          'youtube': ['message', 'subscriber', 'sponsor', 'tip', 'superchat'],
        }

      function generate(event) {
        let object = Object.entries(events[provider])
          .filter(([key]) => listeners[provider].some((e) => e.includes(key)) && (key + '-latest').includes(event))
          .reduce((acc, [key, value]) => {
            switch (key) {
              case 'message':
                acc = value

                break

              default:
                let { gifted, community, unique, max, min } = value,
                  chances = {
                    gifted: randomValue(100, 0),
                    community: randomValue(100, 0),
                    unique: randomValue(100, 0),
                  },
                  maxMin = randomValue(max, min)

                let event = {
                  type: key,
                  name: name,
                  sender: name,
                  amount: amount ? amount : unique ? (chances.unique > 70 ? maxMin : 1) : maxMin,
                  ...bases[provider]?.event,
                }

                gifted && chances.gifted > 85
                  ? (event = {
                      ...event,
                      gifted: false,
                      bulkGifted: true,
                      isCommunityGift: false,
                    })
                  : chances.gifted > 75
                  ? (event = {
                      ...event,
                      gifted: true,
                      bulkGifted: false,
                      isCommunityGift: false,
                      name: randomRelativeValue(names)[0],
                    })
                  : community && chances.community > 95
                  ? (event = {
                      ...event,
                      gifted: true,
                      bulkGifted: false,
                      isCommunityGift: true,
                      name: randomRelativeValue(names)[0],
                    })
                  : (event = {
                      ...event,
                      gifted: false,
                      bulkGifted: false,
                      isCommunityGift: false,
                    })

                value.message && (event = { ...event, message: message })

                acc = { listener: key + '-latest', event }

                break
            }

            return acc
          }, {})

        // if (!object) throw new Error('Something went wrong')

        return { detail: object }
      }

      switch (listener) {
        case 'message':
          return generate('message')

        case 'event':
        case 'events':
          return generate(randomRelativeValue(listeners[provider].slice(1))[0])

        case 'random':
          return generate(randomRelativeValue(listeners[provider])[0])

        default:
          return generate(listener)
      }
    },
  },
}

// Simulate

function startSimulation() {
  data.simulation.enabled ? widget.warn(` SIMULATION IS ALREADY RUNNING `) : widget.alert(` SIMULATION STARTED `)

  !data.simulation.enabled && (data.simulation.enabled = true)
}

function stopSimulation() {
  data.simulation.enabled ? widget.alert(` SIMULATION STOPPED `) : widget.warn(` SIMULATION IS ALREADY STOPPED `)

  data.simulation.enabled && (data.simulation.enabled = false)
}

async function simulate(data = {}, event = false) {
  event = typeof event == 'boolean' ? (event ? 'onSessionUpdate' : 'onEventReceived') : event
  data = await simulation.templates[event](generateData(data))

  if ((event == 'onEventReceived' && data.detail?.listener && data.detail?.event) || (event == 'onSessionUpdate' && data.detail?.session))
    return newEvent(event, data)
}

function generateData(options) {
  let { randomRelativeValue, randomColor } = simulation.functions,
    { names, messages } = data

  return {
    listener: options?.listener || 'random',
    name: randomRelativeValue(names)[0],
    message: randomRelativeValue(messages)[0],
    badges: 'random',
    amount: undefined,
    color: randomColor(),

    ...options,
  }
}

function newEvent(event, data, direct = false) {
  if (direct || ['onSessionUpdate', 'onWidgetLoad'].some((e) => event == e)) return window.dispatchEvent(new CustomEvent(event, data))
  else return queue?.enqueue({ event, data })
}

// Pronouns and Profiles

const cache = {
  pronouns: { cache: {}, list: {}, enabled: false },
  profiles: {
    cache: {},
    enabled: false,
    regex:
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
  },
  emotes: {
    list: {},
  },
  expire: 1,
}

async function fetchProfile(data) {
  let username = data?.displayName || data?.username || data?.nick

  if (!username || username.length <= 0) throw 'You have to include a valid username'
  if (!cache.profiles.enabled) return undefined

  switch (provider) {
    case 'twitch':
      let profileCache = cache.profiles.cache[username]

      if (profileCache && new Date(profileCache?.expire) > new Date()) return profileCache.profile
      else {
        delete cache.profiles.cache[username]

        try {
          return await fetch('https://decapi.me/twitch/avatar/' + username.toLowerCase())
            .then((res) => res.text())
            .then((data) => {
              if (data.match(cache.profiles.regex) && !data.includes('user-default-pictures')) {
                cache.profiles.cache[username] = { profile: data, expire: Date.now() + cache.expire * 60 * 60 * 1000 }

                return data
              } else return undefined
            })
        } catch (err) {
          console.error(err)

          return undefined
        }
      }

    case 'youtube':
      return data?.avatar
  }
}

/**
 * Return Twitch user pronoun
 * @param {String} username: Twitch username
 * @returns {String}: Pronoun
 */
async function fetchPronoun(data) {
  let username = data?.displayName || data?.username || data?.nick

  if (!username || username.length <= 0) throw 'You have to include a valid username'
  if (!cache.pronouns.enabled) return undefined

  switch (provider) {
    case 'twitch':
      let pronounCache = cache.pronouns.cache[username]

      if (pronounCache && new Date(pronounCache.expire) > new Date()) return cache.pronouns?.list[pronounCache?.pronoun_id]
      else {
        try {
          return await fetch('https://pronouns.alejo.io/api/users/' + username.toLowerCase())
            .then((res) => res.json())
            .then(([pronouns]) => {
              if (pronouns) {
                cache.pronouns.cache[username] = { ...pronouns, expire: Date.now() + cache.expire * 60 * 60 * 1000 }

                return cache.pronouns?.list[pronouns?.pronoun_id] || pronouns?.pronoun_id
              } else return undefined
            })
        } catch (err) {
          console.error(err)

          return undefined
        }
      }
      break

    case 'youtube':
      return undefined
  }
}

/**
 * Get the pronoun list from alejo.io
 */
async function getPronouns() {
  await fetch('https://pronouns.alejo.io/api/pronouns')
    .then((res) => res.json())
    .then((data) => {
      if (data && Array.isArray(data)) data.forEach(({ name, display }) => (cache.pronouns.list[name] = display))
    })
}

// Badges

const badgesPriority = {
    'broadcaster': { priority: 12 },
    'subscriber': { priority: 7 },
    'sponsor': { priority: 7 },
    'moderator': { priority: 9 },
    'verified': { priority: 4 },
    'admins': { priority: 11 },
    'premium': { priority: 2 },
    'artist': { priority: 5 },
    'staff': { priority: 10 },
    'cheer': { priority: 6 },
    'prime': { priority: 2 },
    'turbo': { priority: 3 },
    'bot': { priority: 1 },
    'vip': { priority: 8 },
  },
  badgesTags = {
    'broadcaster': 'host',
    'subscriber': 'sub',
    'sponsor': 'member',
    'moderator': 'mod',
    'verified': '✔',
    'admins': 'adm',
    'artist': 'artist',
    'staff': 'staff',
    'prime': 'sub',
    'premium': 'sub',
    'turbo': 'turbo',
    'bot': 'bot',
    'vip': 'vip',
  }

async function getBadges(data, settings = { custom: {}, custom_tags: {} }) {
  const cache = { badges: '', tags: [], role: '', length: 0 }

  let tags = [],
    badges = []

  switch (provider) {
    case 'twitch':
      tags = data.tags.badges.toString().replace(/\/\d+/g, '').split(',')
      badges = data.badges
      break

    case 'youtube':
      let { authorDetails } = data,
        details = {
          isVerified: 'verified',
          isChatOwner: 'broadcaster',
          isChatSponsor: 'sponsor',
          isChatModerator: 'moderator',
        }

      tags = Object.entries(authorDetails)
        .filter(([key]) => key.startsWith('is'))
        .reduce((acc, [key, value]) => {
          value == true && (acc = [...acc, details[key]])
          return acc
        }, [])
      break
  }

  if (tags) {
    tags.forEach((badge) => {
      badge?.includes('bits') && (badge = 'cheer')
      badge?.includes('premium') && (badge = 'prime')

      if ((badgesPriority[badge]?.priority || 1) >= (badgesPriority[cache.role]?.priority || 0)) {
        !settings['roles'] && (cache.role = badge)
      }

      !settings['tags'] && cache.tags.push(settings?.custom_tags ? settings?.custom_tags[badge] || badge : badgesTags[badge] || badge)
    })

    for (const badge of badges) {
      if (badge) {
        badge?.type.includes('bits') && (badge.type = 'cheer')
        badge?.type.includes('premium') && (badge.type = 'prime')

        let img = `<img class="badge" alt="${badge?.type}" src="${badge?.url}" />`

        badge.element = settings?.custom ? settings?.custom[badge?.type] || img : img

        const add = () => {
          cache.badges += badge.element
          cache.length++
        }

        if (cache.length < (settings?.max || 3) && (typeof settings[badge?.type] != 'boolean' || settings[badge?.type] == false))
          (settings['badges'] == false || settings[badge?.type] == false) && add()
      }
    }
  }

  return cache
}

// Main functions

/**
 * Checks if it has more children than the maximum allowed
 * @return {boolean}
 */
function checkMainLength(parent = mainDiv, max = maxRows) {
  return (
    $(parent)
      .children()
      .filter((index, el) => $(el).hasClass('animationIn')).length > max
  )
}

async function tts(text, voice = 'Ricardo') {
  let ctx = new AudioContext()

  return await fetch(`https://api.streamelements.com/kappa/v2/speech?voice=${voice}&text=${text}`)
    .then((data) => data.arrayBuffer())
    .then((arrB) => ctx.decodeAudioData(arrB))
    .then((decoded) => {
      let sound = ctx.createBufferSource()
      sound.buffer = decoded
      sound.connect(ctx.destination)
      sound.start(ctx.currentTime)

      return sound
    })
}

/**
 * Remove the first/last row from main div
 */
function removeRow(delay = 2, options = {}) {
  const { selection = 'first', aIn = 'animationIn', aOut = 'animationOut', parent = mainDiv } = options

  if (
    $(parent)
      .children()
      .filter((index, el) => $(el).hasClass(aIn)).length <= 0
  )
    return widget.info('There is no children to remove')
  else
    return $(parent)
      .children()
      .filter((index, el) => $(el).hasClass(aIn))
      [selection]()
      .dequeue()
      .removeClass(aIn)
      .addClass(aOut)
      .delay(delay > 1000 ? delay : delay * 1000)
      .queue(function () {
        widget.warn(' REMOVING ROW ', this)

        $(this).remove().dequeue()
      })
}

/**
 * Resize elements
 * @param {[{element, max, min}]} array: Array of objects
 */
function resize(array = []) {
  if (Array.isArray(array)) {
    array.forEach(({ element, max = 20, min = 0 }) =>
      element.css({
        'font-size':
          Math.max(Math.min(parseInt(element.css('font-size')) / (element.outerWidth() / element.parent().width()), parseInt(max)), parseInt(min)) +
          'px',
      }),
    )
  } else throw 'This is not a valid array'
}

/**
 * Scale elements
 * @param {[{element, max, min}]} array: Array of objects
 */
function scale(array = []) {
  if (Array.isArray(array)) {
    array.forEach(({ element, max = 1920, min = 0 }) =>
      element.css({
        'transform': `scale(${Math.max(
          Math.min(
            element.parent().width() / element.outerWidth() > element.parent().height() / element.outerHeight()
              ? element.parent().height() / element.outerHeight()
              : element.parent().width() / element.outerWidth(),
            max,
          ),
          min,
        )})`,
      }),
    )
  } else throw 'This is not a valid array'
}

/**
 * Create a new variable in html
 * @param {string} name: Variable name without --
 * @param {*} content: Variable content
 */
function addVariable(name, content, where = mainDiv) {
  if (!content && content != 0) throw 'Você precisa enviar o conteúdo'

  return $(where).css(name.startsWith('--') ? name.replaceAll(' ', '-') : '--' + name.replaceAll(' ', '-'), `${content}`)
}

// String replaceAsync

Object.defineProperty(String.prototype, 'replaceAsync', {
  async value(pattern, callback) {
    const promises = []

    this.replace(pattern, (match, ...args) => {
      const promise = typeof callback == 'function' ? callback(match, ...args) : callback
      promises.push(promise)
    })

    const replacements = await Promise.all(promises)

    return this.replace(pattern, () => replacements.shift())
  },
  writable: false,
})

// String replaceContent

Object.defineProperty(String.prototype, 'replaceContent', {
  value(obj = {}, html = true) {
    const { BT1, BT0, ST1, ST0, UPC, LWC, CAP } = {
      BT1: /\[BT1=([^}]+)\]/, // bigger than one
      BT0: /\[BT0=([^}]+)\]/, // bigger than zero
      ST1: /\[SM1=([^}]+)\]/, // small than one
      ST0: /\[SM0=([^}]+)\]/, // small than zero
      UPC: /\[UPC=([^}]+)\]/, // uppercase
      LWC: /\[LWC=([^}]+)\]/, // lowercase
      CAP: /\[CAP=([^}]+)\]/, // capitalize
    }

    obj = { ...obj, currency, username: obj?.username || obj?.name }

    return this.replace(/{[^}]+}/g, function (word) {
      let value = obj[Object.keys(obj).find((key) => word == `{${key}}`)]

      if (!value) return word

      return html ? `<font class="${word.replace(/{|}/g, '')}">${value.toString()}</font>` : value.toString()
    })
      .replace(/\[[^\]]+]/g, function (group) {
        let amount = obj?.amount || '0'

        if (group.match(BT1)) return parseFloat(amount) > 1 ? group.replace(BT1, '$1') : ''
        if (group.match(BT0)) return parseFloat(amount) > 0 ? group.replace(BT0, '$1') : ''
        if (group.match(ST1)) return parseFloat(amount) < 1 ? group.replace(ST1, '$1') : ''
        if (group.match(ST0)) return parseFloat(amount) < 0 ? group.replace(ST0, '$1') : ''
        if (group.match(UPC)) return group.replace(UPC, (_, s) => s.toString().toUpperCase())
        if (group.match(LWC)) return group.replace(LWC, (_, s) => s.toString().toLowerCase())
        if (group.match(CAP)) return group.replace(CAP, (_, s) => s.toString().capitalize())
      })
      .replaceAll('undefined', '')
  },
  writable: false,
})

// String capitalize

Object.defineProperty(String.prototype, 'capitalize', {
  value() {
    return this[0].toUpperCase() + this.slice(1)
  },
  writable: false,
})

// Stream provider

/**
 * Fetch the stream provider
 * @param {string} id: Stream elements ID
 */
const fetchProvider = (id) => {
  if (id)
    fetch(`https://api.streamelements.com/kappa/v2/channels/${id}/`)
      .then((res) => res.json())
      .then((profile) => (provider = profile.provider))
      .catch(() => {})
  else throw 'You have to include channel ID'
}

// Message functions

/**
 * Return encoded message with html emotes
 * @param {object} data: Message data
 */
async function attachEmotes({ text, emotes, attachment }) {
  text = text.slice(0, (maxMessageLength > 0 ? maxMessageLength : 99999) || 9999).replace(/[<>"^]/g, (e) => '&#' + e.charCodeAt(0) + ';')

  if (typeof attachment != 'undefined' && typeof attachment?.media != 'undefined' && typeof attachment?.media?.image != 'undefined')
    text += `<img class="emote" src="${attachment?.media?.image?.src}" />`

  const awaitImage = async (src) =>
    new Promise((resolve, reject) => {
      let image = new Image()
      image.onload = () => resolve({ width: image.width, height: image.height })
      image.onerror = () => reject(err)
      image.src = src
    })

  return await text.replaceAsync(/([^\s]*)/gi, async function (m, key) {
    let result = emotes.filter((emote) => emote.name == key)

    if (typeof result[0] != 'undefined') {
      let url = result[0]['urls'][4]

      if (result[0]?.type == 'twitch') return `<img class="emote" src="${url}" loading="eager" />`
      else {
        let { width, height } = cache.emotes.list[url] || (await awaitImage(url))

        cache.emotes.list[url] = { url, width, height }

        !result[0].coords &&
          (result[0].coords = {
            x: 0,
            y: 0,
          })

        !result[0].coords.width &&
          (result[0].coords = {
            ...result[0].coords,
            width: width || fields['emoteSize'],
            height: height || fields['emoteSize'],
          })

        let x = parseInt(result[0].coords.x),
          y = parseInt(result[0].coords.y)

        let ratio = `${width || result[0].coords.width}/${height || result[0].coords.height}`

        return `<div class="emote" style="
            aspect-ratio: ${ratio};
            display: inline-block;
            background-image: url(${url});
            background-position: -${x}px -${y}px;
            background-repeat: no-repeat;
            background-size: contain;
            "></div>`
      }
    } else return key
  })
}

async function isEmote({ text, emotes }) {
  let split = text
      .replace(/\s\s+/g, '\ue695')
      .replace(/\s+/g, '\ue695')
      .replaceAll('󠀀', '')
      .split('\ue695')
      .filter((e) => e.length > 0),
    emoteOnly = true,
    emoteLength = 0

  for await (let word of split) {
    if (word.length > 0) {
      if (Array.from(emotes).some(({ name }) => word.includes(name))) {
        emoteLength++
      } else emoteOnly = false
    }
  }

  return [
    emoteOnly,
    emoteLength,
    emoteLength > 0 && emoteLength > 3 ? 'variousEmotes' : emoteLength >= 3 ? 'threeEmotes' : emoteLength >= 2 ? 'twoEmotes' : 'oneEmote',
  ]
}

// Event listeners

$(window).one('onWidgetLoad', ({ detail: { fieldData, ...detail } }) => {
  getPronouns()

  widget.received('onWidgetLoad » Field Data')
  widget.table(fieldData)
  widget.received('onWidgetLoad » Session / Recents', { session: detail.session.data, recents: detail.recents })

  fields = fieldData
  channel = detail.channel
  currency = detail.currency.symbol

  fetchProvider(channel?.id)

  !detail?.simulation && fieldData['debug'] && setTimeout(startSimulation, 1500)
})

$(window).on('onSessionUpdate', ({ detail }) => widget.received('onSessionUpdate » Detail', detail))

$(window).on('onEventReceived', ({ detail: { listener, event, ...detail } }) => {
  listener != 'kvstore:update' && widget.received('onEventReceived » Detail', { listener, event, ...detail })

  switch (listener) {
    case 'event:test':
      switch (event.field) {
        case 'broadcasterMessage':
          simulate({ name: 'Broadcaster', badges: 'broadcaster', message: 'This is a test message', listener: 'message' })
          break
        case 'moderatorMessage':
          simulate({ name: 'Moderator', badges: 'moderator', message: 'This is a test message', listener: 'message' })
          break
        case 'subscriberMessage':
          simulate({ name: 'Subscriber', badges: 'subscriber', message: 'This is a test message', listener: 'message' })
          break
        case 'sponsorMessage':
          simulate({ name: 'Sponsor', badges: 'sponsor', message: 'This is a test message', listener: 'message' })
          break
        case 'vipMessage':
          simulate({ name: 'VIP', badges: 'vip', message: 'This is a test message', listener: 'message' })
          break
        case 'verifiedMessage':
          simulate({ name: 'Verified', badges: 'verified', message: 'This is a test message', listener: 'message' })
          break
        case 'followerMessage':
          simulate({ name: 'Follower', badges: ' ', message: 'This is a test message', listener: 'message' })
          break
      }
      break
  }
})

// Generate fields

const cfields = {
    'color': 'colorpicker',
    'family': 'googleFont',
    'font': 'googleFont',
    'event': 'checkbox',
    'number': 'number',
    'size': 'number',
    'radius': 'number',
    'weight': 'number',
    'gap': 'number',
    'duration': 'number',
    'range': 'slider',
    'time': 'number',
    'options': 'dropdown',
  },
  addons = {
    'slider': {
      'min': 0,
      'max': 100,
    },
    'dropdown': {
      'options': {
        'value': 'value name',
        'value2': 'value2 name',
      },
    },
  }

function generateCf(array = ['color'], options = {}, where = mainDiv) {
  let cf = {}

  Array.from(document.styleSheets)
    .filter(({ href }) => !href || href?.startsWith(window.location.origin))
    .reduce(
      (acc, { cssRules }) =>
        (acc = [
          ...acc,
          ...Array.from(cssRules)
            .filter(({ selectorText, style }) => selectorText == 'main' && Object.values(style).some((el) => el && el.startsWith('--')))
            .reduce((prev, { style }) => (prev = [...prev, ...Object.values(style).filter((key) => key.startsWith('--'))]), []),
        ]),

      [],
    )
    .filter((key) => array.some((el) => key.toLowerCase().includes(el.toLowerCase())))
    .forEach((key) => {
      let name = key.replace('--', '').replace(/-([a-z])/g, (match) => match[1].toUpperCase()),
        category = key.replace('--', '').split('-').slice(-1).join(''),
        label =
          name[0].toUpperCase() +
          name
            .replace(/[A-Z]/g, function (letter) {
              return ' ' + letter
            })
            .replaceAll('Bg', 'background')
            .slice(1)
            .toLowerCase(),
        group = options?.group || category[0].toUpperCase() + category.slice(1) + ' Settings',
        value = options?.value || $(where).css(key)

      category = options?.type || cfields[category]

      let addon = addons[category] || addons[key.replace('--', '').split('-').slice(-1)[0]]

      ;['number', 'slider'].some((t) => category == t) && (value = parseFloat(value))

      cf[name] = {
        type: category || 'text',
        label: label.replace('Community', 'Community sub'),
        value: value,
        ...addon,
        group,
      }
    })

  if (options?.stringify) return `${JSON.stringify(cf)}`

  return cf
}

function applyCf(fieldData = fields, array = ['Size', 'Color', 'Duration'], where = mainDiv) {
  return Object.entries(fieldData)
    .filter(([name]) => array.some((w) => name.toLowerCase().endsWith(w.toLowerCase())))
    .forEach(([name, value]) =>
      addVariable(
        name
          .replace(/[A-Z]/g, function (letter) {
            return '-' + letter
          })
          .toLowerCase(),
        value.toString(),
        where,
      ),
    )
}

function defineEvents(fieldData = fields) {
  return Object.entries(fieldData)
    .filter(([key]) => key.endsWith('Event'))
    .forEach(([key, value]) => {
      value &&
        typeof value == 'boolean' &&
        availableEvents.push(
          key
            .replace(/[A-Z]/g, function (letter) {
              return '-' + letter
            })
            .toLowerCase()
            .replace('event', 'latest'),
        )
    })
}

function filterFields(array = []) {
  !Array.isArray(array) && (array = Object.values(array))

  if (Array.isArray(array))
    for (let [word, callback, map] of array) {
      !map && (map = ([key, value]) => [key.replace(word, '').trim(), value])

      if (word && typeof word == 'string' && callback && typeof callback == 'function')
        Object.entries(fields)
          .filter(([key]) => key.endsWith(word))
          .map(map)
          .forEach(callback)
    }
  else if (argument[0] && typeof argument[0] == 'string' && argument[1] && typeof argument[1] == 'function')
    Object.entries(fields)
      .filter(([key]) => key.endsWith(arguments[0]))
      .map(([key, value]) => [key.replace(arguments[0], ''), value])
      .forEach(arguments[1])
}

// Timer for subathons

class Timer {
  constructor() {
    this.initial = 3600
    this.current = 3600
    this.interval = setInterval(() => this.tick(), 1000)

    this.hours = ~~(this.current / 3600)
    this.minutes = ~~((this.current % 3600) / 60)
    this.seconds = ~~(this.current % 60)

    this.min = 0
    this.max = 7200

    this.animate = (timer) => {}
    this.onLoad = (save) => {}
    this.onTick = (timer) => {}

    this.SE = 'tixyeltimer'

    this.loadFromSE()
  }

  saveOnSE(name = this.SE) {
    name && (this.SE = name)

    return SE_API.store.set(this.SE, { initial: this.initial, current: this.current, min: this.min, max: this.max })
  }

  async loadFromSE(name = this.SE) {
    name && (this.SE = name)

    return await SE_API.store.get(this.SE).then((save) => this.onLoad(save, this))
  }

  update(initial = this.initial, current = this.current, min = this.min, max = this.max) {
    initial != this.initial && (this.initial = initial)
    current != this.current && (this.current = current)
    min != this.min && (this.min = min)
    max != this.max && (this.max = max)

    return this
  }

  tick() {
    this.current > this.min ? this.current-- : (this.current = this.min)

    this.update()
    this.saveOnSE()
    this.onTick(this)
  }

  update() {
    this.hours = ~~(this.current / 3600)
    this.minutes = ~~((this.current % 3600) / 60)
    this.seconds = ~~(this.current % 60)
  }

  resetTime() {
    this.current = this.initial

    this.update()

    return this
  }

  resetAll(initial, current, min, max) {
    this.initial = initial
    this.current = current
    this.min = min
    this.max = max

    this.update()

    return this
  }

  addTime(time) {
    this.current + time > this.max ? (this.current = this.max) : (this.current += time)
    this.animate(this)

    this.update()

    return this
  }

  removeTime(time) {
    this.current -= time
    this.animate(this)

    this.update()

    return this
  }

  convertSeconds(time, space = false, signal = true) {
    return Math.abs(time) >= 60
      ? `${signal ? (time > 0 ? '+' : '-') : ''}${Math.floor(Math.abs(time) / 60)}${space ? ' ' : ''}min`
      : `${signal ? (time > 0 ? '+' : '-') : ''}${Math.abs(time)}${space ? ' ' : ''}sec`
  }

  getTime() {
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
      total: this.current,
    }
  }

  getStringTime() {
    return {
      hours: this.hours < 10 ? '0' + this.hours : this.hours,
      minutes: this.minutes < 10 ? '0' + this.minutes : this.minutes,
      seconds: this.seconds < 10 ? '0' + this.seconds : this.seconds,
      total: this.current,
    }
  }

  setInitial(number) {
    typeof number == 'number' && (this.initial = number)

    this.update()

    return this
  }

  setCurrent(number) {
    typeof number == 'number' && (this.current = number)

    this.update()

    return this
  }

  setMin(number) {
    typeof number == 'number' && (this.min = number)

    this.update()

    return this
  }

  setMax(number) {
    typeof number == 'number' && (this.max = number)

    this.update()

    return this
  }

  setAnimation(func) {
    typeof func == 'function' && (this.animate = func)

    return this
  }

  setLoad(func) {
    typeof func == 'function' && (this.onLoad = func)

    return this
  }

  setTick(func) {
    typeof func == 'function' && (this.onTick = func)

    return this
  }
}

// Queue class

class Queue {
  constructor() {
    this.queue = []
    this.list = []

    this.currentTimeout = null
    this.duration = 0

    this.running = false
    this.callback = () => {}

    this.i = this.duration / 1000 - 1
  }

  setCallback(func) {
    typeof func == 'function' && (this.callback = func)

    return this
  }

  setDuration(duration = 0) {
    this.duration = duration > 1000 ? duration : duration * 1000

    return this
  }

  enqueue(item) {
    typeof item != 'object' && (item = { item })

    this.queue.push({ ...item, isoDate: new Date().toISOString() })

    if (!this.running) return this.run()
  }

  resumeQueue() {
    if (this.running) {
      clearTimeout(this.currentTimeout)

      this.i = 0
      this.running = false

      this.run()
    }

    return 'success'
  }

  async run() {
    if (this.queue.length <= 0) return (this.running = false)
    else this.running = true

    let item = this.queue.shift()

    this.i = this.duration / 1000

    this.list.push(item)

    typeof this.callback == 'function' && this.callback(item)

    this.duration > 0 && (await this.delayExecution(this.duration).then(() => (this.running = false)))

    this.run()
  }

  async delayExecution(milliseconds) {
    return new Promise((resolve) => {
      this.currentTimeout = setTimeout(resolve, milliseconds)
    })
  }
}

// Point system

class Point {
  constructor() {
    this.initialPoints = 0
    this.points = 0

    this.min = 0
    this.max = Infinity

    this.onUpdate = () => {}
    this.onRemove = () => {}
    this.onReach = () => {}
    this.onReset = () => {}
    this.onLoad = () => {}
    this.onAdd = () => {}

    this.SE = 'tixyelpoints'

    this.loadFromSE()
  }

  addPoints(amount) {
    this.points += amount

    this.run()
    this.saveOnSE()

    return this.onAdd(this)
  }

  removePoints(amount) {
    this.points - amount <= this.min ? (this.points = this.min) : (this.points -= amount)

    return this.onRemove(this)
  }

  resetPoints(amount = this.initialPoints) {
    this.points = amount

    return this.onReset(this)
  }

  update(points = this.points, initial = this.initialPoints, min = this.min, max = this.max) {
    points != this.points && (this.points = points)
    initial != this.initialPoints && (this.initialPoints = initial)
    min != this.min && (this.min = min)
    max != this.max && (this.max = max)

    this.run()
    return this.onUpdate()
  }

  run() {
    if (this.points >= this.max) {
      this.onReach(this)

      return (this.points = this.points % this.max)
    } else return this
  }

  getPoints() {
    return this.points
  }

  getFormated(separator = '|') {
    return `${parseInt(this.points) || 0} {separator} ${parseInt(this.max)}`.replaceContent({ separator })
  }

  saveOnSE(name = this.SE) {
    name && (this.SE = name)

    return SE_API.store.set(this.SE, { points: this.points, initial: this.initialPoints, min: this.min, max: this.max })
  }

  loadFromSE(name = this.SE) {
    name && (this.SE = name)

    return SE_API.store.get(this.SE).then((save) => this.onLoad(save, this))
  }

  setInitial(number) {
    typeof number == 'number' && (this.initialPoints = number)

    return this
  }

  setMin(number) {
    typeof number == 'number' && (this.min = number)

    return this
  }

  setMax(number) {
    typeof number == 'number' && (this.max = number)

    return this
  }

  setPoints(number) {
    typeof number == 'number' && (this.points = number)

    return this
  }

  setUpdate(func) {
    typeof func == 'function' && (this.onUpdate = func)

    return this
  }

  setRemove(func) {
    typeof func == 'function' && (this.onRemove = func)

    return this
  }

  setReach(func) {
    typeof func == 'function' && (this.onReach = func)

    return this
  }

  setReset(func) {
    typeof func == 'function' && (this.onReset = func)

    return this
  }

  setLoad(func) {
    typeof func == 'function' && (this.onLoad = func)

    return this
  }

  setAdd(func) {
    typeof func == 'function' && (this.onAdd = func)

    return this
  }
}

// Typing class
class Typing {
  constructor() {
    this.duration = 1000

    this.list = []

    this.onUpdate = () => {}
    this.runTest = () => false

    this.total = 0
  }

  setDuration(milliseconds) {
    this.duration != milliseconds && (this.duration = milliseconds)

    return this
  }

  setTest(func) {
    typeof func == 'function' && (this.runTest = func)

    return this
  }

  setUpdate(func) {
    typeof func == 'function' && (this.onUpdate = func)

    return this
  }

  async push(item) {
    typeof item != 'object' && (item = { item })

    let current = { ...item, id: this.total++ }

    if (this.runTest(current, this)) return this.delayExecution(this.duration).then(() => this)

    this.list.push(current)
    this.onUpdate(this, current)

    return await this.delayExecution(this.duration).then(() => {
      let index = this.list.findIndex(({ id }) => id == current.id)

      this.list.splice(index, 1)
      this.onUpdate(this, current)

      return { ...this, current }
    })
  }

  remove(item) {
    let current = { ...item }

    this.runTest(current, this) &&
      current?.id &&
      this.list.splice(
        this.list.findIndex(({ id }) => id == current?.id),
        1,
      )
  }

  async delayExecution(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
}

// === INTEGRAZIONE REDEEM ===

// simulation-redeem.js

const data = {
  names: ['Alice', 'Bob', 'Charlie', 'Dana'],
  redeems: [
    { id: 'r1', title: 'Hydrate', cost: 100 },
    { id: 'r2', title: 'Jump!', cost: 300 }
  ],
  simulation: {
    enabled: true,
    delays: { min: 1000, max: 3000 },
    chances: { redeem: 100 } // sempre genera redeem per test
  }
};

const simulation = {
  start() {
    const run = () => {
      const delay = Math.random() * (data.simulation.delays.max - data.simulation.delays.min) + data.simulation.delays.min;
      const user = data.names[Math.floor(Math.random() * data.names.length)];
      const reward = data.redeems[Math.floor(Math.random() * data.redeems.length)];
      const event = new CustomEvent("channelPointsCustomReward", {
        detail: {
          user,
          reward,
          timestamp: Date.now()
        }
      });
      window.dispatchEvent(event);
      setTimeout(run, delay);
    };
    run();
  }
};

window.addEventListener("channelPointsCustomReward", (e) => {
  const detail = e.detail;
  const el = document.createElement('div');
  el.className = 'redeem-event';
  el.innerHTML = `<strong>${detail.user}</strong> redeemed <em>${detail.reward.title}</em> (${detail.reward.cost} pts)`;
  document.getElementById("log").prepend(el);
  console.log("🎁 REDEEM EVENT:", detail);
});

document.addEventListener("DOMContentLoaded", () => {
  simulation.start();
});
