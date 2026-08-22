// src/data/products.ts
// Add a new game by adding an object to this array — it will automatically
// get its own page at /products/[slug].
//
// price: demo price only, used for the demo cart/checkout flow (no real
// payment is processed anywhere on this site).

export interface Product {
  slug: string;
  title: string;
  platform: string; // e.g. 'PC', 'Mobile', 'Console'
  genre: string;
  status: string; // 'Released' | 'In Development'
  description: string;
  features: string[];
  systemRequirements?: string;
  purchaseLink?: string;
  images?: string[]; // screenshots/cover art — first image is used as the card cover
  trailerUrl?: string;
  price?: string; // e.g. '1,999'
}

export const products: Product[] = [
  {
    slug: 'adwa',
    title: 'ADWA',
    platform: 'PC',
    genre: 'Strategy / Action / Historical War',
    status: 'Released',
    description:
      '1896. An empire from across the sea marches on Ethiopian soil, certain of an easy victory. They have never faced Adwa. Step into the sandals of the commanders and warriors who united a fractured nation to defend it — Emperor Menelik II\u2019s call to arms, Empress Taytu\u2019s unbroken resolve, and the tens of thousands who answered, armed with rifles, spears, and a refusal to be conquered. Command your forces across the highlands and gorges of northern Ethiopia in battles built from the real terrain and real stakes of the campaign, in the single greatest victory of an African nation over a European colonial power. This is not a footnote. This is Adwa.',
    features: [
      'Command Ethiopian forces across large-scale historical battles built on the real terrain of the 1896 campaign',
      'Lead named historical figures, from Menelik II\u2019s war council to the front-line ras and warriors who held the line',
      'A story-driven campaign that carries you from the diplomatic breakdown at Wuchale to the decisive morning at Adwa',
      'Tactical formation command — mass your riflemen, flank with cavalry, and hold the high ground when it matters most',
      'A full weapons and equipment progression system, from early rifles to captured artillery',
      'An original score drawing on traditional Ethiopian instrumentation, recorded to match the scale of the battles',
      'Dynamic weather and a day/night cycle that change visibility, footing, and tactics on the battlefield',
      'Cinematic-quality environments recreating the highlands, gorges, and encampments of the campaign',
    ],
    systemRequirements:
      'Minimum: Windows 10 (64-bit), Intel Core i5-8400 / AMD Ryzen 5 2600, 8 GB RAM, NVIDIA GTX 1060 / AMD RX 580, 20 GB available storage.',
    purchaseLink: '',
    images: ['/hero-bg.png', '/adwa1.png', '/adwa2.png', '/adwa3.png'],
    trailerUrl: '',
    price: '2,999ETB',
  },
  {
    slug: 'erta-ale-rider',
    title: 'Erta Ale Rider',
    platform: 'pc',
    genre: 'Adventure Racing',
    status: 'In Development',
    description:
      'Some roads aren\u2019t on any map. Throw a leg over your bike and ride into the Danakil Depression, one of the most punishing and spectacular landscapes on Earth — a hundred kilometers below sea level, where salt flats stretch to the horizon and the ground itself glows red at Erta Ale, the smoking mountain that has never stopped erupting. There\u2019s no traffic out here, no checkpoints, just heat, distance, and a volcano that doesn\u2019t care if you make it. Chase the horizon across terrain that shifts from cracked salt pan to volcanic rock in a single ride, and find out what it actually takes to reach the edge of an active lava lake.',
    features: [
      'A vast, explorable recreation of the Afar Depression — one continuous world, not loading zones',
      'Ride across salt flats, volcanic rock fields, and rivers of cooling lava, each with its own handling and hazards',
      'Physics-driven off-road riding that rewards reading the terrain, not just holding the throttle',
      'A string of exploration missions that push you deeper into the Depression, culminating at Erta Ale\u2019s crater rim',
      'A full day/night cycle paired with volcanic weather effects — ash haze, heat shimmer, and shifting visibility',
      'Unlockable motorcycles and adventure gear that change how the Depression rides beneath you',
    ],
    systemRequirements:
      'Modern web browser (Chrome, Edge, Firefox, Safari), 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '',
    images: ['/erta-ale-ride.jpg', '/ertale1.jpg', '/ertale2.jpg', '/ertale3.jpg'],
    trailerUrl: '',
    price: '1,999ETB',
  },
  {
    slug: 'habeshan-restaurant',
    title: 'Habeshan Restaurant',
    platform: 'mobile',
    genre: 'Cooking Simulation',
    status: 'In Development',
    description:
      'The injera is fermenting, the berbere is ground, and the dining room is filling up. Take over the kitchen of your own Ethiopian restaurant and prove you can run a service that honors the real thing — Doro Wat simmered low and slow, Kitfo served exactly how the regulars like it, Shiro that brings someone back a second time. Every dish has a technique behind it, every customer has an opinion, and your reputation is built one perfectly plated gebeta at a time. Master the rhythm of a real Habeshan kitchen, grow your restaurant from a single table to a destination, and share Ethiopian cuisine with a dining room that keeps coming back for more.',
    features: [
      'Cook a full menu of authentic Ethiopian dishes, from Doro Wat and Tibs to Genfo and Shiro',
      'A hands-on Injera-making process built around traditional fermentation and cooking technique',
      'Serve a dining room of customers with real preferences — keep them happy and watch your ratings climb',
      'Unlock new recipes and kitchen upgrades as your restaurant\u2019s reputation grows',
      'A restaurant built and decorated in authentic Ethiopian style, from the dining room to the kitchen',
      'Fast-paced service challenges that test timing and multitasking as the orders stack up',
    ],
    systemRequirements:
      'Modern web browser (Chrome, Edge, Firefox, Safari), 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '',
    images: ['/habeshanrest.jpg', '/cook1.jpg', '/cook2.jpg', '/cook3.jpg'],
    trailerUrl: '',
    price: '2,999ETB',
  },
  {
    slug: 'ethiopian-taxi-simulator',
    title: 'Ethiopian Taxi Simulator',
    platform: 'pc',
    genre: 'Driving Simulation',
    status: 'Released',
    description:
      'Addis Ababa doesn\u2019t slow down, and neither do you. Take the wheel of the iconic blue-and-white Lada — the taxi every local recognizes on sight — and get to know the capital the way only a driver does: shortcuts through Merkato, the flow of Bole at rush hour, which passenger is running late and which one just wants to talk. Pick up fares, navigate real traffic, and build a reputation as one of the most trusted drivers in the city, one ride at a time. This isn\u2019t a route on rails — it\u2019s a living city, and how you drive it is up to you.',
    features: [
      'Drive the iconic Ethiopian blue-and-white Lada taxi, instantly recognizable across Addis Ababa',
      'Navigate a recreated capital with dynamic traffic that reacts to time of day and your own driving',
      'Pick up and transport passengers across the city, each with their own destination and demands',
      'Earn Ethiopian Birr fare by fare and reinvest it into upgrading your taxi',
      'A full day/night cycle and dynamic weather that change how the city drives and feels',
      'Driving physics tuned for approachable, satisfying gameplay in short sessions or long shifts',
    ],
    systemRequirements: 'Modern pc, 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '',
    images: ['/taxi-simulate.jpg', '/taxi1.jpg', '/taxi2.jpg', '/taxi3.jpg'],
    trailerUrl: '',
    price: '1,499ETB',
  },
];