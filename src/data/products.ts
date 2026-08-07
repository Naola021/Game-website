// src/data/products.ts
// Add a new game by adding an object to this array — it will automatically
// get its own page at /products/[slug].

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
}

export const products: Product[] = [
  {
    slug: 'adwa',
    title: 'ADWA',
    platform: 'PC',
    genre: 'Strategy / Action / Historical War',
    status: 'Released',
    description:
      'ADWA is a historical strategy and action game inspired by the legendary Battle of Adwa of 1896. Lead Ethiopian forces through large-scale battles, command warriors, manage resources, and outsmart invading armies. Experience an epic campaign that celebrates courage, leadership, and one of Africa’s greatest victories while blending authentic history with immersive gameplay.',
    features: [
      'Lead Ethiopian armies in large-scale historical battles',
      'Command multiple warrior units with tactical formations',
      'Story-driven campaign inspired by the Battle of Adwa',
      'Realistic terrain and strategic battlefield objectives',
      'Upgrade weapons, equipment, and military tactics',
      'Immersive soundtrack inspired by Ethiopian culture',
      'Dynamic weather and day/night battle conditions',
      'High-quality cinematic visuals with historical atmosphere',
    ],
    systemRequirements:
      'Minimum: Windows 10 (64-bit), Intel Core i5-8400 / AMD Ryzen 5 2600, 8 GB RAM, NVIDIA GTX 1060 / AMD RX 580, 20 GB available storage.',
    purchaseLink: '',
    images: [
      '/hero-bg.png',
      '/adwa1.png',
      '/adwa2.png',
      '/adwa3.png',
    ],
    trailerUrl: '',
  },
{
    slug: 'erta-ale-rider',
    title: 'Erta Ale Rider',
    platform: 'pc',
    genre: 'Adventure Racing',
    status: 'In Development',
    description:
      'Embark on an unforgettable motorcycle adventure across Ethiopia’s spectacular Afar Depression. Ride through endless salt flats, navigate volcanic terrain, avoid rivers of lava, conquer rugged trails, and discover the breathtaking beauty of Erta Ale, one of the world’s most active volcanoes. Every journey tests your riding skills while showcasing one of Africa’s most extraordinary landscapes.',
    features: [
      'Explore the Afar Depression in a vast open environment.',
      'Ride across salt flats, volcanic trails, and lava fields.',
      'Realistic off-road motorcycle handling.',
      'Complete exploration missions and challenges.',
      'Dynamic day/night cycle and volcanic weather effects.',
      'Unlock motorcycles, equipment, and adventure gear.',
    ],
    systemRequirements:
      'Modern web browser (Chrome, Edge, Firefox, Safari), 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '#',
    images: [
      '/erta-ale-ride.jpg',
      '/ertale1.jpg',
      '/ertale2.jpg',
      '/ertale3.jpg',
    ],
    trailerUrl: '',
  },
{
    slug: 'habeshan-restaurant',
    title: 'Habeshan Restaurant',
    platform: 'mobile',
    genre: 'Cooking Simulation',
    status: 'In Development',
    description:
      'Become the chef of your own traditional Ethiopian restaurant. Prepare authentic dishes such as Doro Wat, Injera, Kitfo, Genfo, Tibs, Shiro, and many more. Master traditional cooking techniques, satisfy hungry customers, unlock new recipes, expand your restaurant, and share the rich flavors of Ethiopian cuisine with the world.',
    features: [
      'Cook authentic Ethiopian traditional meals.',
      'Prepare Injera using traditional cooking methods.',
      'Serve customers and increase restaurant ratings.',
      'Unlock new recipes and kitchen upgrades.',
      'Beautiful Ethiopian-inspired restaurant environment.',
      'Fast-paced cooking challenges with rewarding progression.',
    ],
    systemRequirements:
      'Modern web browser (Chrome, Edge, Firefox, Safari), 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '#',
    images: [
      '/habeshanrest.jpg',
      '/cook1.jpg',
      '/cook2.jpg',
      '/cook3.jpg',
    ],
    trailerUrl: '',
  },

   {
    slug: 'ethiopian-taxi-simulator',
    title: 'Ethiopian Taxi Simulator',
    platform: 'pc',
    genre: 'Driving Simulation',
    status: 'Released',
    description:
      'Experience the streets of Ethiopia behind the wheel of the iconic blue-and-white Lada taxi. Pick up passengers, navigate the busy roads of Addis Ababa, obey traffic rules, earn fares, and build your reputation as one of the city’s most trusted taxi drivers. Explore authentic Ethiopian neighborhoods, landmarks, and daily city life while upgrading your vehicle and unlocking new routes.',
    features: [
      'Drive the iconic Ethiopian blue-and-white Lada taxi.',
      'Navigate realistic Ethiopian city streets with dynamic traffic.',
      'Pick up and transport passengers across the city.',
      'Earn Ethiopian Birr and upgrade your taxi.',
      'Experience day/night and dynamic weather conditions.',
      'Immersive driving physics designed for casual web gameplay.',
    ],
    systemRequirements:
      'Modern pc, 8 GB RAM recommended, WebGL support, stable internet connection.',
    purchaseLink: '#',
    images: [
      '/taxi-simulate.jpg',
      '/taxi1.jpg',
      '/taxi2.jpg',
      '/taxi3.jpg',
    ],
    trailerUrl: '',
  },

];