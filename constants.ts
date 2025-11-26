import { EventItem, DaySchedule, ContactInfo } from './types';

// GitHub CDN Base URL
const GITHUB_BASE = "https://raw.githubusercontent.com/man-with-scars/temp_images/main";

// Logos (already on GitHub)
export const LOGO_URL = `${GITHUB_BASE}/dhoniverse-logo.png`;
export const TDF_LOGO_URL = `${GITHUB_BASE}/TDF%20WHITE.png`;

// About image - migrated to GitHub
export const ABOUT_IMAGE_URL = `${GITHUB_BASE}/dhoniverse/aboutus.webp`;

// Hero background - migrated to GitHub
export const HERO_BACKGROUND = `${GITHUB_BASE}/dhoniverse/Dhoniverse_front.webp`;

export const CONTACT: ContactInfo = {
  name: "Adv. Mridul Kunjumon",
  role: "Programme Coordinator",
  phone: "+91 97465 40426",
  address: "Dhoni, Palakkad - 678009"
};

// Critical images for preloading - all GitHub CDN
export const CRITICAL_IMAGES = [
  `${GITHUB_BASE}/dhoniverse/Dhoniverse_front.webp`,
  LOGO_URL,
  TDF_LOGO_URL,
  ABOUT_IMAGE_URL,
  `${GITHUB_BASE}/dhoniverse/gatta.webp`,
  `${GITHUB_BASE}/dhoniverse/kabbadi.webp`,
  `${GITHUB_BASE}/dhoniverse/kalaripayattu.webp`,
  `${GITHUB_BASE}/dhoniverse/mtb.webp`,
  `${GITHUB_BASE}/dhoniverse/music.webp`,
  `${GITHUB_BASE}/dhoniverse/theyyam.webp`
];

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Kalaripayattu',
    category: 'Culture',
    image: `${GITHUB_BASE}/dhoniverse/kalaripayattu.webp`,
    description: 'The ancient martial art of Kerala.',
    detailedDescription: 'Kalaripayattu, known as the mother of all martial arts, has deep roots in Kerala\'s cultural heritage. In Palakkad, this ancient combat form has been preserved through generations of warriors and practitioners. Dhoni\'s lush landscapes and traditional kalaris (training grounds) have nurtured masters who continue to pass down this 3000-year-old art form. Watch as skilled practitioners demonstrate strikes, kicks, and weapon techniques that once defended kingdoms.'
  },
  {
    id: '2',
    title: 'Theyyam',
    category: 'Culture',
    image: `${GITHUB_BASE}/dhoniverse/theyyam.webp`,
    description: 'The dance of gods.',
    detailedDescription: 'Theyyam is a sacred ritual art form where performers embody deities and ancestral spirits. While primarily associated with North Kerala, Palakkad\'s proximity to Malabar has made it a cultural crossroad where Theyyam traditions thrive. In Dhoni, this mystical performance connects the community to their spiritual roots, with elaborate costumes, face paintings, and powerful movements that transform the performer into a living deity, blessing the land and its people.'
  },
  {
    id: '3',
    title: 'MTB Race',
    category: 'Sports',
    image: `${GITHUB_BASE}/dhoniverse/mtb.webp`,
    description: 'Adrenaline fueled mountain biking.',
    detailedDescription: 'Dhoni\'s rugged terrain and scenic trails make it a paradise for mountain biking enthusiasts. The Western Ghats foothills surrounding Palakkad offer challenging routes through forests, streams, and rocky paths. This MTB race showcases the natural beauty of Dhoni while testing riders\' endurance and skill. The event has become a celebration of Palakkad\'s adventure tourism potential, attracting cyclists who seek the thrill of conquering nature\'s obstacles.'
  },
  {
    id: '4',
    title: 'Garuda Parava',
    category: 'Culture',
    image: `${GITHUB_BASE}/dhoniverse/Garuda.webp`,
    description: 'Traditional ritualistic art form.',
    detailedDescription: 'Garuda Parava is a rare and mesmerizing folk ritual unique to this region. In Palakkad\'s villages, including Dhoni, this ancient ceremony invokes Garuda, the mythical bird deity. Performers adorned in vibrant costumes and elaborate headdresses enact stories of valor and devotion. The ritual is deeply intertwined with local temple festivals and agricultural cycles, representing the community\'s connection to nature and mythology passed down through countless generations.'
  },
  {
    id: '5',
    title: 'Mentalism',
    category: 'Art',
    image: `${GITHUB_BASE}/dhoniverse/mentalism.webp`,
    description: 'Mind-bending performance by Ajmal.',
    detailedDescription: 'Experience the extraordinary as renowned mentalist Ajmal brings his mind-reading prowess to Dhoniverse. While mentalism is a modern art form, it resonates with Palakkad\'s rich tradition of storytelling and mystery. Ajmal\'s performance bridges the gap between ancient mysticism and contemporary entertainment, captivating audiences with psychological illusions, predictions, and demonstrations that challenge the boundaries of perception. A perfect fusion of art and intellect for Dhoni\'s diverse community.'
  },
  {
    id: '6',
    title: 'Gatta Gusthi',
    category: 'Sports',
    image: `${GITHUB_BASE}/dhoniverse/gatta.webp`,
    description: 'Traditional wrestling championship.',
    detailedDescription: 'Gatta Gusthi, traditional mud wrestling, has been a cornerstone of rural sports in Palakkad for centuries. In Dhoni\'s villages, wrestling pits called "gatta" are sacred grounds where strength, technique, and honor are tested. This ancient sport, practiced in Kerala\'s heartland, brings together wrestlers from across the region to compete in the traditional style—without any equipment, just raw power and skill. It embodies the warrior spirit that has defined Palakkad\'s cultural identity.'
  },
  {
    id: '7',
    title: 'Off Road Experience',
    category: 'Sports',
    image: `${GITHUB_BASE}/dhoniverse/offroad.webp`,
    description: 'High octane off-road action.',
    detailedDescription: 'Dhoni\'s diverse landscape of forests, hills, and rough terrain creates the perfect arena for off-road adventures. This experience showcases Palakkad\'s natural topography through high-octane challenges, showcasing vehicles conquering muddy trails, and water crossings. The event highlights how Dhoni\'s rugged beauty can be both a playground and a test of mechanical prowess, attracting adventure seekers and automobile enthusiasts from across Kerala.'
  },
  {
    id: '8',
    title: 'Music Fest',
    category: 'Art',
    image: `${GITHUB_BASE}/dhoniverse/music.webp`,
    description: 'Live bands under the stars.',
    detailedDescription: 'Music runs through the veins of Palakkad, from classical Carnatic traditions to contemporary rock. The Music Fest at Dhoniverse brings together diverse genres under the open sky, celebrating the region\'s musical heritage. Local and regional bands perform against the backdrop of Dhoni\'s serene landscape, creating an unforgettable sonic experience. This event showcases Palakkad\'s evolving music scene while honoring its deep-rooted appreciation for melody and rhythm.'
  },
  {
    id: '10',
    title: 'Tug of War',
    category: 'Sports',
    image: `${GITHUB_BASE}/dhoniverse/tug.webp`,
    description: 'Strength against strength.',
    detailedDescription: 'Tug of War is more than a sport in rural Palakkad—it\'s a test of collective strength and unity. In Dhoni, this traditional competition brings together teams from neighboring villages, fostering camaraderie and friendly rivalry. The rope symbolizes the bonds that connect communities, while the struggle represents the challenges they overcome together. This age-old game, played during harvest festivals and celebrations, embodies the spirit of cooperation that defines village life.'
  },
  {
    id: '11',
    title: 'Kite Fest',
    category: 'Culture',
    image: `${GITHUB_BASE}/dhoniverse/kite.webp`,
    description: 'Colors in the sky.',
    detailedDescription: 'Kite flying in Palakkad is a cherished tradition, especially during harvest season when clear skies and favorable winds create perfect conditions. In Dhoni, the Kite Fest transforms the sky into a canvas of colors and designs. Families compete with traditional and modern kites, from simple paper designs to elaborate creations. This celebration connects generations, as grandparents teach children the art of kite flying—a symbol of freedom, joy, and the region\'s pastoral beauty.'
  },
  {
    id: '12',
    title: 'Kabbadi',
    category: 'Sports',
    image: `${GITHUB_BASE}/dhoniverse/kabbadi.webp`,
    description: 'Pro-level matches.',
    detailedDescription: 'Kabbadi holds a special place in Palakkad\'s sporting culture, with the district producing some of Kerala\'s finest players. In Dhoni, this indigenous sport is played with passion and pride, bringing communities together. The pro-level matches at Dhoniverse feature skilled raiders and defenders in intense combat that requires strategy, agility, and breath control. Kabbadi represents the rustic sporting spirit that has thrived in Palakkad\'s villages for generations.'
  },
  {
    id: '13',
    title: 'And there\'ll be more',
    category: 'Surprises',
    image: '.nomedia',
    description: 'be a part',
    detailedDescription: 'Join and witness the true spirit of community driven festivals'
  }
];

export const SCHEDULE: DaySchedule[] = [
  {
    date: 'Dec 26',
    day: 'Friday',
    events: [
      { time: '4:00 PM', event: 'Inauguration', description: 'Grand opening ceremony.' },
      { time: '5:30 PM', event: 'Theyyam', description: 'Divine ritual art form performance.' },
      { time: '7:00 PM', event: 'Garuda Parava', description: 'Traditional folk ritual.' },
      { time: '8:30 PM', event: 'Tug of War', description: 'Strength against strength.' }
    ]
  },
  {
    date: 'Dec 27',
    day: 'Saturday',
    events: [
      { time: '9:00 AM', event: 'Kalaripayattu', description: 'The mother of all martial arts.' },
      { time: '11:00 AM', event: 'MTB Race', description: 'Mountain bike challenge.' },
      { time: '3:00 PM', event: 'Gatta Gusthi', description: 'Traditional mud wrestling.' },
      { time: '5:00 PM', event: 'Kite Fest', description: 'Colors in the sky.' },
      { time: '7:00 PM', event: 'Kabbadi', description: 'Pro-level matches.' }
    ]
  },
  {
    date: 'Dec 28',
    day: 'Sunday',
    events: [
      { time: '10:00 AM', event: 'Off Road Experience', description: 'Off-road racing action.' },
      { time: '4:00 PM', event: 'Cultural Programs', description: 'Various artistic performances.' },
      { time: '6:00 PM', event: 'Mentalism by Ajmal', description: 'Mind reading and illusions.' },
      { time: '8:00 PM', event: 'Music Fest', description: 'Live music grand finale.' }
    ]
  }
];