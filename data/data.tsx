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

// const recentlyLaunchedProjects = []

export {
  logos,
  featuredProjects,
  recentlyLaunchedProjects
} 