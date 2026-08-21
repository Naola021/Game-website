// src/data/projects.ts
//
// Projects are portfolio / development case studies.
// Products are the studio's games; Projects showcase development work,
// experiments, prototypes, and other interactive experiences.

export interface Project {
  slug: string;
  title: string;
  client: string;
  techStack: string[];
  scope: string;
  outcome: string;
  images: string[]; // screenshots — first image is used as the card cover
}

export const projects: Project[] = [
  {
    slug: 'adwa',
    title: 'ADWA',
    client: 'Demo Games — Internal Project',
    techStack: [
      'Game Development',
      '3D Development',
      'Game Design',
      'Interactive Systems',
      'Cinematic Storytelling',
    ],
    scope:
      'A historical action-strategy project inspired by the Battle of Adwa. The project focuses on large-scale Ethiopian battlefields, tactical gameplay, historical storytelling, environmental design, and cinematic presentation.',
    outcome:
      'Developed an original playable game concept that combines Ethiopian history and cultural identity with modern interactive gameplay. ADWA demonstrates our approach to building story-driven worlds with a strong local identity.',
    images: ['/adwaproject.png'],
  },

  {
    slug: 'addis-city-life',
    title: 'Addis City Life',
    client: 'epic games',
    techStack: [
      'Game Development',
      '3D Environment',
      'Simulation Systems',
      'Interactive Design',
      'WebGL',
    ],
    scope:
      'A city-life simulation concept inspired by the everyday streets of Addis Ababa. The project explores interactive urban environments, local transportation, marketplaces, pedestrians, traffic systems, and everyday city activities.',
    outcome:
      'Created a visually rich Ethiopian urban environment designed to demonstrate how familiar local places and experiences can be transformed into engaging interactive experiences.',
    images: ['/addis.png'],
  },

  {
    slug: 'africa-beyond',
    title: 'Africa Beyond',
    client: 'abyssinia studio',
    techStack: [
      'Game Development',
      'World Building',
      '3D Environment',
      'Adventure Systems',
      'Narrative Design',
    ],
    scope:
      'An exploration-focused adventure concept built around discovering landscapes, cultures, and hidden stories across an imagined African world. The project combines environmental exploration, narrative discovery, landmarks, and atmospheric world building.',
    outcome:
      'Developed a prototype world demonstrating our ability to create large-scale environments and combine exploration with cultural storytelling. The project explores how African-inspired settings can become the foundation for original game worlds.',
    images: ['/africa.png'],
  },
];