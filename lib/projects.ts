export interface ProjectImage {
  src: string;
  alt: string;
  full?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  displayName: string;
  category: string;
  location: string;
  projectType: string;
  projectStatus: string;
  siteArea: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  images: ProjectImage[];
  hasDrawing: boolean;
  drawingImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'altus-house',
    name: 'Altus House',
    displayName: 'ALTUS HOUSE',
    category: 'Residential- Architecture & Interior',
    location: 'Mussoorie',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Perched in the quiet folds of Mussoorie, Altus House is a careful conversation between past and present—an old structure reimagined into a refined Airbnb retreat. The project began not with a blank canvas, but with layers of memory, proportion, and character already embedded in its bones.",
    thumbnail: '/images/projects/altus-house-hero.png',
    heroImage: '/images/projects/altus-house-hero.png',
    images: [
      { src: '/images/projects/altus-house-hero.png', alt: 'Altus House', full: true },
      { src: '/images/projects/altus-house-img2.png', alt: 'Altus House — interior', full: true },
      { src: '/images/projects/altus-house-img3.png', alt: 'Altus House — detail', full: false },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/altus-house-drawing.png',
  },
  {
    slug: 'mystic-fox',
    name: 'Mystic Fox',
    displayName: 'MYSTIC FOX',
    category: 'Hospitality- Interior',
    location: 'Mussoorie',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Perched in Mussoorie, Mystic Fox is designed to frame the views of the valley while creating an interior world of warmth and texture. The design draws from the mystique of the hills—dark woods, stone walls, soft lighting, and layered surfaces that invite lingering.',
    thumbnail: '/images/projects/mystic-fox-cafe-hero.png',
    heroImage: '/images/projects/mystic-fox-cafe-hero.png',
    images: [
      { src: '/images/projects/mystic-fox-cafe-hero.png', alt: 'Mystic Fox', full: true },
      { src: '/images/projects/mystic-fox-cafe-img2.png', alt: 'Mystic Fox — bar', full: true },
      { src: '/images/projects/mystic-fox-cafe-img3.png', alt: 'Mystic Fox — staircase', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'taos-nook',
    name: "Tao's Nook",
    displayName: "TAO'S NOOK",
    category: 'Residential- Architecture & Interior',
    location: 'Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Ongoing',
    siteArea: '',
    description:
      "A contemporary A-frame retreat tucked into the greens of Mayfair, Dehradun—where bold geometry meets the warmth of timber, stone, and glass. Designed as an intimate Airbnb, the structure opens up to its surroundings, framing light, sky, and trees through expansive glazing and layered outdoor spaces.",
    thumbnail: '/images/projects/taos-nook-hero.png',
    heroImage: '/images/projects/taos-nook-hero.png',
    images: [
      { src: '/images/projects/taos-nook-hero.png', alt: "Tao's Nook", full: true },
      { src: '/images/projects/taos-nook-img2.png', alt: "Tao's Nook — interior", full: true },
      { src: '/images/projects/taos-nook-img3.png', alt: "Tao's Nook — detail", full: false },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/the-hideaway-drawing.png',
  },
  {
    slug: 'the-interlock-house',
    name: 'The Interlock House',
    displayName: 'THE INTERLOCK HOUSE',
    category: 'Residential- Architecture & Interior',
    location: 'Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'The Interlock House is a contemporary residence in Dehradun designed around a bold volumetric composition—where cubic masses interlock and overlap to create a dynamic three-dimensional facade. The design plays with solids and voids, light and shadow, creating a home that is both architecturally striking and deeply liveable.',
    thumbnail: '/images/projects/the-interlock-house-hero.png',
    heroImage: '/images/projects/the-interlock-house-hero.png',
    images: [
      { src: '/images/projects/the-interlock-house-hero.png', alt: 'The Interlock House', full: true },
      { src: '/images/projects/the-interlock-house-img4.png', alt: 'The Interlock House — facade', full: true },
      { src: '/images/projects/the-interlock-house-img5.png', alt: 'The Interlock House — detail', full: false },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/the-interlock-house-img3.png',
  },
  {
    slug: 'dazzleberry',
    name: 'Dazzleberry',
    displayName: 'DAZZLEBERRY',
    category: 'Residential- Architecture & Interior',
    location: 'Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Dazzleberry is a multi-unit residential project that balances a contemporary architectural language with the warmth of a liveable home. The facade is composed through a rhythm of balconies, planters, and textured surfaces that soften the built form while creating a strong urban presence.',
    thumbnail: '/images/projects/dazzleberry-hero.png',
    heroImage: '/images/projects/dazzleberry-hero.png',
    images: [
      { src: '/images/projects/dazzleberry-hero.png', alt: 'Dazzleberry', full: true },
      { src: '/images/projects/dazzleberry-img2.png', alt: 'Dazzleberry — evening', full: true },
      { src: '/images/projects/dazzleberry-img3.png', alt: 'Dazzleberry — facade', full: true },
      { src: '/images/projects/dazzleberry-img4.png', alt: 'Dazzleberry — detail', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'ostello',
    name: 'Ostello',
    displayName: 'OSTELLO',
    category: 'Residential- Architecture & Interior',
    location: 'Bidholi, Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A student hostel designed with the intention of creating a living environment that fosters community while preserving individual privacy. The design organizes shared and private spaces in a hierarchy that encourages interaction at communal nodes while allowing for quiet retreat.',
    thumbnail: '/images/projects/ostello-hero.png',
    heroImage: '/images/projects/ostello-hero.png',
    images: [
      { src: '/images/projects/ostello-hero.png', alt: 'Ostello', full: true },
      { src: '/images/projects/ostello-img2.png', alt: 'Ostello — evening view', full: true },
      { src: '/images/projects/ostello-img3.png', alt: 'Ostello — facade', full: true },
      { src: '/images/projects/ostello-img4.png', alt: 'Ostello — detail', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'mittal-residence',
    name: 'Mittal Residence',
    displayName: 'MITTAL RESIDENCE',
    category: 'Residential- Interior',
    location: 'Dehradun',
    projectType: 'Residential Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A residential interior project that balances individual identity with a coherent design language. Each space is tailored to its occupants while maintaining material and spatial continuity throughout—where luxury meets warmth in a deeply personal home.',
    thumbnail: '/images/projects/mittal-residence-hero.png',
    heroImage: '/images/projects/mittal-residence-hero.png',
    images: [
      { src: '/images/projects/mittal-residence-hero.png', alt: 'Mittal Residence', full: true },
      { src: '/images/projects/mittal-residence-img2.png', alt: 'Mittal Residence — living', full: true },
      { src: '/images/projects/mittal-residence-img3.png', alt: 'Mittal Residence — lounge', full: true },
      { src: '/images/projects/mittal-residence-img4.png', alt: 'Mittal Residence — bedroom', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'the-brick-house',
    name: 'The Brick House',
    displayName: 'THE BRICK HOUSE',
    category: 'Residential- Architecture & Interior',
    location: 'Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'The Brick House is a contemporary residence that draws on the rawness and warmth of exposed brick to create a facade that is both tactile and refined. Angular volumes, double-height spaces, and carefully placed apertures define a home that is materially honest and spatially generous.',
    thumbnail: '/images/projects/the-brick-house-hero.png',
    heroImage: '/images/projects/the-brick-house-hero.png',
    images: [
      { src: '/images/projects/the-brick-house-hero.png', alt: 'The Brick House', full: true },
      { src: '/images/projects/the-brick-house-img2.png', alt: 'The Brick House — facade', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'rivulet',
    name: 'Rivulet',
    displayName: 'RIVULET',
    category: 'Residential- Architecture & Interior',
    location: 'Mussoorie',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Rivulet is a hillside residence in Mussoorie designed to negotiate the dramatic topography with sensitivity and precision. The structure steps down the slope in a series of terraced volumes, each framing the landscape and allowing the mountain to remain the dominant presence.",
    thumbnail: '/images/projects/rivulet-hero.png',
    heroImage: '/images/projects/rivulet-hero.png',
    images: [
      { src: '/images/projects/rivulet-hero.png', alt: 'Rivulet', full: true },
      { src: '/images/projects/rivulet-img2.png', alt: 'Rivulet — exterior', full: true },
      { src: '/images/projects/rivulet-img3.png', alt: 'Rivulet — evening', full: true },
      { src: '/images/projects/rivulet-img4.png', alt: 'Rivulet — facade detail', full: false },
      { src: '/images/projects/rivulet-img5.png', alt: 'Rivulet — garden', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'naturoville',
    name: 'Naturoville',
    displayName: 'NATUROVILLE',
    category: 'Hospitality',
    location: 'Rishikesh',
    projectType: 'Hospitality Landscape',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A wellness retreat in Rishikesh, Naturoville integrates built form with the landscape of the Shivalik foothills. Spaces are designed for contemplation, healing, and reconnection with nature—each room and pathway considered as part of a larger therapeutic environment.',
    thumbnail: '/images/projects/naturoville-hero.png',
    heroImage: '/images/projects/naturoville-hero.png',
    images: [
      { src: '/images/projects/naturoville-hero.png', alt: 'Naturoville', full: true },
      { src: '/images/projects/naturoville-img2.png', alt: 'Naturoville — pool terrace', full: true },
      { src: '/images/projects/naturoville-img3.png', alt: 'Naturoville — garden path', full: true },
      { src: '/images/projects/naturoville-img4.png', alt: 'Naturoville — spa pavilion', full: false },
      { src: '/images/projects/naturoville-img5.png', alt: 'Naturoville — night view', full: false },
      { src: '/images/projects/naturoville-img6.png', alt: 'Naturoville — detail', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'hacienda',
    name: 'Hacienda',
    displayName: 'HACIENDA',
    category: 'Residential- Architecture & Interior',
    location: 'Mussoorie',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Hacienda draws from the Mediterranean tradition of the enclosed courtyard estate—adapted to the hillside setting of Mussoorie. The design is anchored by arched colonnades, terracotta tones, and lush garden courts that create a series of layered outdoor rooms flowing naturally from the interior.",
    thumbnail: '/images/projects/hacienda-hero.png',
    heroImage: '/images/projects/hacienda-hero.png',
    images: [
      { src: '/images/projects/hacienda-hero.png', alt: 'Hacienda', full: true },
      { src: '/images/projects/hacienda-img2.png', alt: 'Hacienda — garden facade', full: true },
      { src: '/images/projects/hacienda-img3.png', alt: 'Hacienda — colonnade', full: true },
      { src: '/images/projects/hacienda-img4.png', alt: 'Hacienda — courtyard', full: false },
      { src: '/images/projects/hacienda-img5.png', alt: 'Hacienda — pool', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'sfm-living',
    name: 'SFM Living',
    displayName: 'SFM LIVING',
    category: 'Commercial- Interior',
    location: 'Dehradun',
    projectType: 'Commercial Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A commercial interior project that brings together a furniture showroom and lifestyle brand under a single cohesive design vision. The space is organized to allow browsing and dwelling, with vignettes that suggest how pieces can be assembled into liveable environments—where arched doorways and warm lighting create an experience that feels more home than showroom.',
    thumbnail: '/images/projects/sfm-living-hero.png',
    heroImage: '/images/projects/sfm-living-hero.png',
    images: [
      { src: '/images/projects/sfm-living-hero.png', alt: 'SFM Living', full: true },
      { src: '/images/projects/sfm-living-img2.png', alt: 'SFM Living — entrance', full: true },
      { src: '/images/projects/sfm-living-img3.png', alt: 'SFM Living — interior', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'sau-jan-estate',
    name: 'Sau Jan Estate',
    displayName: 'SAU JAN ESTATE',
    category: 'Residential- Architecture & Interior',
    location: 'Mussoorie',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "A residential estate in Mussoorie that draws from the region's vernacular while reinterpreting it through a contemporary lens. The design responds to the dramatic landscape of the hills—each space framed to capture mountain views while grounding the home in its site.",
    thumbnail: '/images/projects/sau-jan-estate-hero.png',
    heroImage: '/images/projects/sau-jan-estate-hero.png',
    images: [
      { src: '/images/projects/sau-jan-estate-hero.png', alt: 'Sau Jan Estate', full: true },
      { src: '/images/projects/sau-jan-estate-img2.png', alt: 'Sau Jan Estate — exterior', full: true },
      { src: '/images/projects/sau-jan-estate-img3.png', alt: 'Sau Jan Estate — terrace', full: true },
      { src: '/images/projects/sau-jan-estate-img4.png', alt: 'Sau Jan Estate — evening', full: false },
      { src: '/images/projects/sau-jan-estate-img5.png', alt: 'Sau Jan Estate — garden', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: 'farzi-cafe',
    name: 'FARZI Cafe',
    displayName: 'FARZI CAFE',
    category: 'Hospitality',
    location: 'Indore',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Designed to balance the energy of a popular restaurant brand with a locally grounded character, FARZI Cafe is an exercise in layered hospitality design. The interior is playful at the surface but materially considered throughout, creating an atmosphere that is both theatrical and refined.',
    thumbnail: '/images/projects/farzi-cafe-hero.png',
    heroImage: '/images/projects/farzi-cafe-hero.png',
    images: [
      { src: '/images/projects/farzi-cafe-hero.png', alt: 'FARZI Cafe', full: true },
      { src: '/images/projects/farzi-cafe-img2.png', alt: 'FARZI Cafe — bar', full: true },
      { src: '/images/projects/farzi-cafe-img3.png', alt: 'FARZI Cafe — lounge', full: true },
      { src: '/images/projects/farzi-cafe-img4.png', alt: 'FARZI Cafe — seating', full: false },
      { src: '/images/projects/farzi-cafe-img5.png', alt: 'FARZI Cafe — detail', full: false },
      { src: '/images/projects/farzi-cafe-img6.png', alt: 'FARZI Cafe — ceiling', full: false },
    ],
    hasDrawing: false,
  },
  {
    slug: '4bhk-cafe',
    name: '4BHK Cafe',
    displayName: '4BHK CAFE',
    category: 'Hospitality- Interior',
    location: 'Dehradun',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "4BHK Cafe is a hospitality project in Dehradun designed to feel like a home—with a lush courtyard, tropical greens, and handcrafted furniture that blur the boundary between cafe and living space. The design is warm, layered, and deeply personal.",
    thumbnail: '/images/projects/4bhk-cafe-hero.png',
    heroImage: '/images/projects/4bhk-cafe-hero.png',
    images: [
      { src: '/images/projects/4bhk-cafe-hero.png', alt: '4BHK Cafe', full: true },
      { src: '/images/projects/4bhk-cafe-img2.png', alt: '4BHK Cafe — courtyard', full: true },
      { src: '/images/projects/4bhk-cafe-img3.png', alt: '4BHK Cafe — garden', full: true },
      { src: '/images/projects/4bhk-cafe-img4.png', alt: '4BHK Cafe — exterior', full: false },
    ],
    hasDrawing: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

// Gallery items: one entry per project using Figma hero images
export interface GalleryItem {
  src: string;
  projectSlug: string;
  projectName: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/projects/altus-house-hero.png',            projectSlug: 'altus-house',          projectName: 'Altus House',            alt: 'Altus House' },
  { src: '/images/projects/mystic-fox-cafe-hero.png',        projectSlug: 'mystic-fox',            projectName: 'Mystic Fox',             alt: 'Mystic Fox' },
  { src: '/images/projects/taos-nook-hero.png',              projectSlug: 'taos-nook',             projectName: "Tao's Nook",             alt: "Tao's Nook" },
  { src: '/images/projects/the-interlock-house-hero.png',    projectSlug: 'the-interlock-house',   projectName: 'The Interlock House',    alt: 'The Interlock House' },
  { src: '/images/projects/dazzleberry-hero.png',            projectSlug: 'dazzleberry',           projectName: 'Dazzleberry',            alt: 'Dazzleberry' },
  { src: '/images/projects/ostello-hero.png',                projectSlug: 'ostello',               projectName: 'Ostello',                alt: 'Ostello' },
  { src: '/images/projects/mittal-residence-hero.png',       projectSlug: 'mittal-residence',      projectName: 'Mittal Residence',       alt: 'Mittal Residence' },
  { src: '/images/projects/the-brick-house-hero.png',        projectSlug: 'the-brick-house',       projectName: 'The Brick House',        alt: 'The Brick House' },
  { src: '/images/projects/rivulet-hero.png',                projectSlug: 'rivulet',               projectName: 'Rivulet',                alt: 'Rivulet' },
  { src: '/images/projects/naturoville-hero.png',            projectSlug: 'naturoville',           projectName: 'Naturoville',            alt: 'Naturoville' },
  { src: '/images/projects/hacienda-hero.png',               projectSlug: 'hacienda',              projectName: 'Hacienda',               alt: 'Hacienda' },
  { src: '/images/projects/sfm-living-hero.png',             projectSlug: 'sfm-living',            projectName: 'SFM Living',             alt: 'SFM Living' },
  { src: '/images/projects/sau-jan-estate-hero.png',         projectSlug: 'sau-jan-estate',        projectName: 'Sau Jan Estate',         alt: 'Sau Jan Estate' },
  { src: '/images/projects/farzi-cafe-hero.png',             projectSlug: 'farzi-cafe',            projectName: 'FARZI Cafe',             alt: 'FARZI Cafe' },
  { src: '/images/projects/4bhk-cafe-hero.png',              projectSlug: '4bhk-cafe',             projectName: '4BHK Cafe',              alt: '4BHK Cafe' },
];
