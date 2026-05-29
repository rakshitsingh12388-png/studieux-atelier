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
    slug: 'golf-greens-residence',
    name: 'Golf Greens Residence',
    displayName: 'GOLF GREEN RESIDENCE',
    category: 'Residential Landscaping',
    location: 'Golf Greens, Indore',
    projectType: 'Residential Landscape',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy. Linear pathways, structured greens, and tropical planting create a composed framework, while elements like bamboo screens and dense foliage introduce softness and depth.",
    thumbnail: '/images/projects/golf-greens-residence-hero.png',
    heroImage: '/images/projects/golf-greens-residence-hero.png',
    images: [
      { src: '/images/projects/golf-greens-residence-hero.png', alt: 'Golf Greens Residence', full: true },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/golf-greens-residence-drawing.png',
  },
  {
    slug: 'the-hideaway',
    name: 'The Hideaway',
    displayName: 'THE HIDEAWAY',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Ongoing',
    siteArea: '',
    description:
      "A contemporary A-frame retreat tucked into the greens of Mayfair, Dehradun—where bold geometry meets the warmth of timber, stone, and glass. Designed as an intimate Airbnb, the structure opens up to its surroundings, framing light, sky, and trees through expansive glazing and layered outdoor spaces.",
    thumbnail: '/images/projects/the-hideaway-hero.png',
    heroImage: '/images/projects/the-hideaway-hero.png',
    images: [
      { src: '/images/projects/the-hideaway-hero.png', alt: 'The Hideaway', full: true },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/the-hideaway-drawing.png',
  },
  {
    slug: 'edifice',
    name: 'Edifice',
    displayName: 'EDIFICE',
    category: 'Residential- Interior',
    location: "Engineer's Enclave, Dehradun",
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "A contemporary residence in Engineer's Enclave, Dehradun, designed as a balance of openness and privacy—where clean lines meet layered depth. The facade is defined by vertical fins and recessed balconies, creating a rhythmic play of light, shadow, and greenery while softening the built form. Planters are integrated as living edges, bringing nature into every level and blurring the boundary between inside and out.",
    thumbnail: '/images/projects/edifice-hero.png',
    heroImage: '/images/projects/edifice-hero.png',
    images: [
      { src: '/images/projects/edifice-hero.png', alt: 'Edifice', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'sb-sons-hardware-store',
    name: 'SB Sons Hardware Store',
    displayName: 'SB SONS HARDWARE STORE',
    category: 'Commercial- Interior',
    location: 'Dehradun',
    projectType: 'Commercial Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Designed as more than just a retail space, SB Sons Hardware Store reimagines the experience of browsing materials as a curated journey. The interiors are structured through clean lines and linear pathways, guiding movement while showcasing products with clarity and intent. Sliding panels, vertical display systems, and modular units transform functional hardware into an engaging visual narrative.',
    thumbnail: '/images/projects/sb-sons-hardware-store-hero.png',
    heroImage: '/images/projects/sb-sons-hardware-store-hero.png',
    images: [
      { src: '/images/projects/sb-sons-hardware-store-hero.png', alt: 'SB Sons Hardware Store', full: true },
    ],
    hasDrawing: false,
  },
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
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/altus-house-drawing.png',
  },
  {
    slug: 'elemento',
    name: 'Elemento',
    displayName: 'ELEMENTO',
    category: 'Hospitality',
    location: 'Mussoorie',
    projectType: 'Hospitality Architecture',
    projectStatus: 'Ongoing',
    siteArea: '',
    description:
      'Designed as a contemporary hillside retreat, this hotel in Mussoorie balances simplicity with a strong architectural rhythm. The facade is articulated through a grid of balconies, vertical fins, and textured surfaces, creating a play of light and shadow that evolves through the day and comes alive at night. Each room opens outward, framing views of the hills while maintaining a sense of privacy and calm.',
    thumbnail: '/images/projects/elemento-hero.png',
    heroImage: '/images/projects/elemento-hero.png',
    images: [
      { src: '/images/projects/elemento-hero.png', alt: 'Elemento', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'mystic-fox-cafe',
    name: 'Mystic Fox Cafe',
    displayName: 'MYSTIC FOX CAFE',
    category: 'Hospitality- Interior',
    location: 'Mussoorie',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Perched in Mussoorie, Mystic Fox Cafe is designed to frame the views of the valley while creating an interior world of warmth and texture. The design draws from the mystique of the hills—dark woods, soft lighting, and layered surfaces that invite lingering.',
    thumbnail: '/images/projects/mystic-fox-cafe-hero.png',
    heroImage: '/images/projects/mystic-fox-cafe-hero.png',
    images: [
      { src: '/images/projects/mystic-fox-cafe-hero.png', alt: 'Mystic Fox Cafe', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'celebrity-apartment',
    name: 'Celebrity Apartment',
    displayName: 'CELEBRITY APARTMENT',
    category: 'Residential- Interior',
    location: 'Dehradun',
    projectType: 'Residential Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A residential interior project in Dehradun, Celebrity Apartment balances individual identity with a coherent design language. Each space is tailored to its occupants while maintaining material and spatial continuity throughout.',
    thumbnail: '/images/projects/celebrity-apartment-hero.png',
    heroImage: '/images/projects/celebrity-apartment-hero.png',
    images: [
      { src: '/images/projects/celebrity-apartment-hero.png', alt: 'Celebrity Apartment', full: true },
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
    ],
    hasDrawing: false,
  },
  {
    slug: 'jb-residence',
    name: 'JB Residence',
    displayName: 'JB RESIDENCE',
    category: 'Residential',
    location: 'Indore',
    projectType: 'Residential Landscape',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy. Linear pathways, structured greens, and tropical planting create a composed framework, while elements like bamboo screens and dense foliage introduce softness and depth.",
    thumbnail: '/images/projects/jb-residence-hero.png',
    heroImage: '/images/projects/jb-residence-hero.png',
    images: [
      { src: '/images/projects/jb-residence-hero.png', alt: 'JB Residence', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'sfm-living',
    name: 'SFM Living',
    displayName: 'SFM LIVING',
    category: 'Commercial- Interior',
    location: 'Indore',
    projectType: 'Commercial Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A commercial interior project that brings together furniture showroom and lifestyle brand under a single cohesive design vision. The space is organized to allow browsing and dwelling, with vignettes that suggest how pieces can be assembled into liveable environments.',
    thumbnail: '/images/projects/sfm-living-hero.png',
    heroImage: '/images/projects/sfm-living-hero.png',
    images: [
      { src: '/images/projects/sfm-living-hero.png', alt: 'SFM Living', full: true },
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
    ],
    hasDrawing: false,
  },
  {
    slug: 'group-housing',
    name: 'Group Housing',
    displayName: 'GROUP HOUSING',
    category: 'Residential- Architecture & Interior',
    location: 'Purkul, Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "A group housing project in Purkul, Dehradun, designed to provide quality residential environments within a coherent architectural framework. The design organizes shared and private spaces in a hierarchy that encourages community while preserving individual privacy.",
    thumbnail: '/images/projects/group-housing-hero.png',
    heroImage: '/images/projects/group-housing-hero.png',
    images: [
      { src: '/images/projects/group-housing-hero.png', alt: 'Group Housing', full: true },
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
    ],
    hasDrawing: false,
  },
  {
    slug: 'sadana-house',
    name: 'Sadana House',
    displayName: 'SADANA HOUSE',
    category: 'Residential Landscaping',
    location: 'Dalanwala, Dehradun',
    projectType: 'Residential Landscaping',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "A residential landscaping project in Dalanwala, Dehradun, designed as a seamless extension of the home's contemporary architecture. The landscape unfolds as a series of calm, layered spaces that balance openness with privacy, with structured greens and tropical planting creating a composed framework.",
    thumbnail: '/images/projects/sadana-house-hero.png',
    heroImage: '/images/projects/sadana-house-hero.png',
    images: [
      { src: '/images/projects/sadana-house-hero.png', alt: 'Sadana House', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'urban-estates-office',
    name: 'Urban Estates Office, 2nd Floor',
    displayName: 'URBAN ESTATES OFFICE',
    category: 'Office- Interior',
    location: 'Dehradun',
    projectType: 'Office Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'An office interior designed around the idea of productive calm. The layout distinguishes between collaborative and focused work zones through spatial hierarchy and material change rather than physical partitions.',
    thumbnail: '/images/projects/urban-estates-office-hero.png',
    heroImage: '/images/projects/urban-estates-office-hero.png',
    images: [
      { src: '/images/projects/urban-estates-office-hero.png', alt: 'Urban Estates Office', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'dishas-cafe',
    name: "Disha's Cafe",
    displayName: "DISHA'S CAFE",
    category: 'Hospitality',
    location: 'Dehradun',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "A cafe interior that serves as both a destination and a workspace. The design creates a layered environment where one can move from high-energy social spaces near the entrance to quieter, more private zones towards the rear—stitched together by lush planting and warm materiality.",
    thumbnail: '/images/projects/dishas-cafe-hero.png',
    heroImage: '/images/projects/dishas-cafe-hero.png',
    images: [
      { src: '/images/projects/dishas-cafe-hero.png', alt: "Disha's Cafe", full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'bidholi-hostel',
    name: 'Bidholi Hostel',
    displayName: 'BIDHOLI HOSTEL',
    category: 'Residential- Architecture & Interior',
    location: 'Bidholi, Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A student hostel designed with the intention of creating a living environment that fosters community while preserving individual privacy. The design organizes shared and private spaces in a hierarchy that encourages interaction at communal nodes while allowing for quiet retreat.',
    thumbnail: '/images/projects/bidholi-hostel-hero.png',
    heroImage: '/images/projects/bidholi-hostel-hero.png',
    images: [
      { src: '/images/projects/bidholi-hostel-hero.png', alt: 'Bidholi Hostel', full: true },
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
  { src: '/images/projects/golf-greens-residence-hero.png',  projectSlug: 'golf-greens-residence',     projectName: 'Golf Greens Residence',          alt: 'Golf Greens Residence' },
  { src: '/images/projects/the-hideaway-hero.png',           projectSlug: 'the-hideaway',              projectName: 'The Hideaway',                   alt: 'The Hideaway' },
  { src: '/images/projects/edifice-hero.png',                projectSlug: 'edifice',                   projectName: 'Edifice',                        alt: 'Edifice' },
  { src: '/images/projects/sb-sons-hardware-store-hero.png', projectSlug: 'sb-sons-hardware-store',    projectName: 'SB Sons Hardware Store',         alt: 'SB Sons Hardware Store' },
  { src: '/images/projects/altus-house-hero.png',            projectSlug: 'altus-house',               projectName: 'Altus House',                    alt: 'Altus House' },
  { src: '/images/projects/elemento-hero.png',               projectSlug: 'elemento',                  projectName: 'Elemento',                       alt: 'Elemento' },
  { src: '/images/projects/mystic-fox-cafe-hero.png',        projectSlug: 'mystic-fox-cafe',           projectName: 'Mystic Fox Cafe',                alt: 'Mystic Fox Cafe' },
  { src: '/images/projects/celebrity-apartment-hero.png',    projectSlug: 'celebrity-apartment',       projectName: 'Celebrity Apartment',            alt: 'Celebrity Apartment' },
  { src: '/images/projects/naturoville-hero.png',            projectSlug: 'naturoville',               projectName: 'Naturoville',                    alt: 'Naturoville' },
  { src: '/images/projects/jb-residence-hero.png',           projectSlug: 'jb-residence',              projectName: 'JB Residence',                   alt: 'JB Residence' },
  { src: '/images/projects/sfm-living-hero.png',             projectSlug: 'sfm-living',                projectName: 'SFM Living',                     alt: 'SFM Living' },
  { src: '/images/projects/farzi-cafe-hero.png',             projectSlug: 'farzi-cafe',                projectName: 'FARZI Cafe',                     alt: 'FARZI Cafe' },
  { src: '/images/projects/group-housing-hero.png',          projectSlug: 'group-housing',             projectName: 'Group Housing',                  alt: 'Group Housing' },
  { src: '/images/projects/sau-jan-estate-hero.png',         projectSlug: 'sau-jan-estate',            projectName: 'Sau Jan Estate',                 alt: 'Sau Jan Estate' },
  { src: '/images/projects/sadana-house-hero.png',           projectSlug: 'sadana-house',              projectName: 'Sadana House',                   alt: 'Sadana House' },
  { src: '/images/projects/urban-estates-office-hero.png',   projectSlug: 'urban-estates-office',      projectName: 'Urban Estates Office, 2nd Floor', alt: 'Urban Estates Office' },
  { src: '/images/projects/dishas-cafe-hero.png',            projectSlug: 'dishas-cafe',               projectName: "Disha's Cafe",                   alt: "Disha's Cafe" },
  { src: '/images/projects/bidholi-hostel-hero.png',         projectSlug: 'bidholi-hostel',            projectName: 'Bidholi Hostel',                 alt: 'Bidholi Hostel' },
];
