const logos = [
  '/logos/logo-01.png',
  '/logos/logo-02.png',
  '/logos/logo-03.png',
  '/logos/logo-04.png',
  '/logos/logo-05.png',
  '/logos/logo-06.png',
  '/logos/logo-07.png',
  '/logos/logo-08.png',
  '/logos/logo-09.png',
  '/logos/logo-10.png',
  '/logos/logo-11.png',
]

const featuredProjects = [
  {
    id: 1,
    name: 'Amphora',
    description: 'Detailed frontend UI for e-commerce website.',
    tags: ['Frontend', 'React', 'Tailwind'],
    votes: 635,
    isFeatured: false
  },
  {
    id: 2,
    name: 'Claros',
    description: 'Websocket server application.',
    tags: ['Backend', 'Express'],
    votes: 818,
    isFeatured: true
  },
  {
    id: 3,
    name: 'Gnosis',
    description: 'Fully developed authentication system.',
    tags: ['Fullstack', 'Next JS', 'Postgres'],
    votes: 479,
    isFeatured: true
  },
  {
    id: 4,
    name: 'Nexus II',
    description: 'Powerful backend API.',
    tags: ['Backend', 'Nest JS',],
    votes: 594,
    isFeatured: false
  },
]

const recentlyLaunchedProjects = [
  {
    id: 1,
    name: 'Pyroclastia',
    description: 'Retro inspired space shooter',
    tags: ['Game Dev', 'Godot'],
    votes: 65,
    isFeatured: false
  },
  {
    id: 2,
    name: 'Terraforge',
    description: 'Procedural terrain generating application',
    tags: ['Frontend', 'Three JS'],
    votes: 818,
    isFeatured: true
  }
]

const allProjects = [
  {
    id: 1,
    name: 'FaerStream',
    slug: 'faerstream',
    tagline: 'Realtime peer-to-peer file transfer powered by WebRTC',
    description:
      'FaerStream is a realtime file transfer application built on WebRTC, enabling secure, direct, peer-to-peer sharing without servers acting as intermediaries. Designed for speed, privacy, and simplicity.',
    websiteUrl: 'https://github.com/example/faerstream',
    tags: ['WebRTC', 'Realtime', 'Peer-to-Peer', 'JavaScript'],
    createdAt: new Date('2025-07-01'),
    approvedAt: new Date('2026-03-12'),
    status: 'approved',
    submittedBy: 'dev.faer@example.com',
    voteCount: 214,
  },
  {
    id: 2,
    name: 'Pharos',
    slug: 'pharos-kanban',
    tagline: 'A clean and powerful Kanban system for teams',
    description:
      'Pharos is a full Kanban workflow system built using JavaScript, Express, Node, and MongoDB. It features drag-and-drop task management, team collaboration tools, and persistent cloud-backed storage.',
    websiteUrl: 'https://github.com/example/pharos',
    tags: ['Kanban', 'Node.js', 'Express', 'MongoDB', 'Full Stack'],
    createdAt: new Date('2025-10-03'),
    approvedAt: new Date('2026-03-17'),
    status: 'approved',
    submittedBy: 'pharos.dev@example.com',
    voteCount: 178,
  },
  {
    id: 3,
    name: 'Atlassia',
    slug: 'atlassia-map-generator',
    tagline: 'Procedural map generation with pure JavaScript',
    description:
      'Atlassia is a random map generator built using Vanilla JavaScript and CSS. It creates dynamic, tile-based maps suitable for games, simulations, and creative tools, with customizable terrain rules.',
    websiteUrl: 'https://github.com/example/atlassia',
    tags: ['JavaScript', 'Procedural Generation', 'CSS', 'Game Dev'],
    createdAt: new Date('2025-11-05'),
    approvedAt: new Date('2026-02-25'),
    status: 'approved',
    submittedBy: 'atlas@example.com',
    voteCount: 132,
  },
  {
    id: 4,
    name: 'Sirius',
    slug: 'sirius-scheduler',
    tagline: 'A modern scheduling and calendar system',
    description:
      'Sirius is a calendar scheduling application built with Next.js, Drizzle ORM, Clerk authentication, and TypeScript. It supports event creation, reminders, team calendars, and timezone-aware scheduling.',
    websiteUrl: 'https://github.com/example/sirius',
    tags: ['Next.js', 'TypeScript', 'Drizzle', 'Clerk', 'Scheduling'],
    createdAt: new Date('2025-10-06'),
    approvedAt: new Date('2026-03-02'),
    status: 'approved',
    submittedBy: 'sirius.dev@example.com',
    voteCount: 301,
  },
  {
    id: 5,
    name: 'Terraforge',
    slug: 'terraforge',
    tagline: 'Procedural terrain generation in the browser',
    description:
      'Terraforge uses Three.js to generate rich, procedural 3D terrain with noise algorithms, lighting effects, and real-time controls. Ideal for world-building, games, and simulation tools.',
    websiteUrl: 'https://github.com/example/terraforge',
    tags: ['Three.js', '3D', 'Procedural Generation', 'WebGL'],
    createdAt: new Date('2025-08-07'),
    approvedAt: new Date('2026-01-27'),
    status: 'approved',
    submittedBy: 'terra@example.com',
    voteCount: 489,
  },
  {
    id: 6,
    name: 'Labyrinth III',
    slug: 'labyrinth-iii',
    tagline: 'A gritty 3D maze experience built with Three.js',
    description:
      'Labyrinth III is a dark, atmospheric 3D maze game created using Three.js. Players navigate shifting corridors, dynamic lighting, and environmental hazards in a browser-based immersive world.',
    websiteUrl: 'https://github.com/example/labyrinth-iii',
    tags: ['Three.js', 'Game Dev', '3D', 'WebGL'],
    createdAt: new Date('2025-05-08'),
    approvedAt: new Date('2026-02-28'),
    status: 'approved',
    submittedBy: 'maze.master@example.com',
    voteCount: 367,
  },
  {
    id: 7,
    name: 'Orbis',
    slug: 'orbis-image-recognition',
    tagline: 'Browser-based image recognition made simple',
    description:
      'Orbis is an image recognition application built with JavaScript, leveraging modern browser APIs and lightweight ML models. Users can upload images and receive classification results instantly.',
    websiteUrl: 'https://github.com/example/orbis',
    tags: ['JavaScript', 'Machine Learning', 'Image Recognition'],
    createdAt: new Date('2025-12-09'),
    approvedAt: new Date('2026-02-19'),
    status: 'approved',
    submittedBy: 'orbis.ai@example.com',
    voteCount: 254,
  },
  {
    id: 8,
    name: 'Sennar',
    slug: 'sennar-dashboard',
    tagline: 'A modern university dashboard for students and staff',
    description:
      'Sennar is a university dashboard application built with React, Refine, and Tailwind CSS. It includes course management, analytics, announcements, and role-based access for students and administrators.',
    websiteUrl: 'https://github.com/example/sennar',
    tags: ['React', 'Refine', 'Tailwind', 'Dashboard'],
    createdAt: new Date('2025-08-24'),
    approvedAt: new Date('2026-03-10'),
    status: 'approved',
    submittedBy: 'sennar@example.com',
    voteCount: 198,
  },
  {
    id: 9,
    name: 'Sapienta',
    slug: 'sapienta-learning-hub',
    tagline: 'A clean and scalable online learning hub',
    description:
      'Sapienta is an online learning platform built with Next.js and MongoDB. It supports course creation, progress tracking, user authentication, and a modular content system.',
    websiteUrl: 'https://github.com/example/sapienta',
    tags: ['Next.js', 'MongoDB', 'Learning', 'Full Stack'],
    createdAt: new Date('2025-10-30'),
    approvedAt: new Date('2026-02-11'),
    status: 'approved',
    submittedBy: 'sapienta@example.com',
    voteCount: 412,
  },
]


export {
  logos,
  featuredProjects,
  allProjects,
  recentlyLaunchedProjects
} 