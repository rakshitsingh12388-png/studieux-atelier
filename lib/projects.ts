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
    thumbnail: '/images/gallery/thumb-01.png',
    heroImage: '/images/projects/golf-greens-hero.png',
    images: [
      { src: '/images/gallery/thumb-01.png', alt: 'Golf Greens Residence', full: true },
      { src: '/images/gallery/thumb-02.png', alt: 'Golf Greens Residence Detail' },
      { src: '/images/gallery/thumb-03.png', alt: 'Golf Greens Residence Landscape' },
    ],
    hasDrawing: true,
    drawingImage: '/images/projects/golf-greens-residence.png',
  },
  {
    slug: 'the-hideaway',
    name: 'The Hideaway',
    displayName: 'THE HIDEAWAY',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Residential',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A private retreat nestled in the foothills of Dehradun, The Hideaway is designed around the idea of quiet withdrawal. The architecture responds to the natural contours of the site, creating a home that feels grown from its landscape rather than placed upon it.',
    thumbnail: '/images/projects/the-hideaway-hero.png',
    heroImage: '/images/projects/the-hideaway-hero.png',
    images: [
      { src: '/images/projects/the-hideaway-hero.png', alt: 'The Hideaway', full: true },
      { src: '/images/gallery/thumb-04.png', alt: 'The Hideaway Detail' },
    ],
    hasDrawing: true,
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
      { src: '/images/gallery/thumb-07.png', alt: 'Edifice Facade' },
    ],
    hasDrawing: false,
  },
  {
    slug: 'sb-sons-hardware-store',
    name: 'SB Sons Hardware Store',
    displayName: 'SB SONS HARDWARE STORE',
    category: 'Commercial- Interior',
    location: 'Kanwali Rd, Dehradun',
    projectType: 'Commercial Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Designed as more than just a retail space, SB Sons Hardware Store reimagines the experience of browsing materials as a curated journey. The interiors are structured through clean lines and linear pathways, guiding movement while showcasing products with clarity and intent. Sliding panels, vertical display systems, and modular units transform functional hardware into an engaging visual narrative.',
    thumbnail: '/images/projects/sb-sons-hero.png',
    heroImage: '/images/projects/sb-sons-hero.png',
    images: [
      { src: '/images/projects/sb-sons-hero.png', alt: 'SB Sons Hardware Store', full: true },
      { src: '/images/gallery/thumb-10.png', alt: 'SB Sons Hardware Store Interior' },
    ],
    hasDrawing: false,
  },
  {
    slug: 'altus-house',
    name: 'Altus House',
    displayName: 'ALTUS HOUSE',
    category: 'Hospitality',
    location: 'Mussoorie',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Perched in the hills of Mussoorie, Altus House draws from the region's colonial vernacular while reinterpreting it through a contemporary lens. Brick masonry, arched openings, and layered interior spaces define a home that is deeply rooted in place yet forward-looking in its sensibility.",
    thumbnail: '/images/projects/altus-house-hero.png',
    heroImage: '/images/projects/altus-house-hero.png',
    images: [
      { src: '/images/projects/altus-house-hero.png', alt: 'Altus House', full: true },
      { src: '/images/gallery/thumb-13.png', alt: 'Altus House Exterior' },
      { src: '/images/gallery/thumb-14.png', alt: 'Altus House Interior' },
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
    thumbnail: '/images/projects/bidholi-hero.png',
    heroImage: '/images/projects/bidholi-hero.png',
    images: [
      { src: '/images/projects/bidholi-hero.png', alt: 'Bidholi Hostel', full: true },
      { src: '/images/gallery/thumb-16.png', alt: 'Bidholi Hostel Interior' },
    ],
    hasDrawing: true,
  },
  {
    slug: 'celebrity-apartments',
    name: 'Celebrity Apartments',
    displayName: 'CELEBRITY APARTMENTS',
    category: 'Residential- Interior',
    location: 'Balbir Road, Dehradun',
    projectType: 'Residential Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A multi-unit residential interior project along Balbir Road, Celebrity Apartments balances individual unit identity with a coherent design language across the building. Each apartment is tailored to its occupants while maintaining material and spatial continuity.',
    thumbnail: '/images/projects/celebrity-hero.png',
    heroImage: '/images/projects/celebrity-hero.png',
    images: [
      { src: '/images/projects/celebrity-hero.png', alt: 'Celebrity Apartments', full: true },
      { src: '/images/gallery/thumb-18.png', alt: 'Celebrity Apartments Interior' },
    ],
    hasDrawing: false,
  },
  {
    slug: 'the-interlock-house',
    name: 'The Interlock House',
    displayName: 'THE INTERLOCK HOUSE',
    category: 'Residential -Exterior & Interior',
    location: '41, Vijay Park, Dehradun',
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'Named for its interlocking volumes and the way spaces weave into each other, The Interlock House is a study in spatial continuity. Exterior and interior blur across thresholds, with materials carrying across boundaries to create a seamless domestic landscape.',
    thumbnail: '/images/projects/interlock-hero.png',
    heroImage: '/images/projects/interlock-hero.png',
    images: [
      { src: '/images/projects/interlock-hero.png', alt: 'The Interlock House', full: true },
      { src: '/images/gallery/thumb-20.png', alt: 'The Interlock House Interior' },
    ],
    hasDrawing: true,
  },
  {
    slug: 'dazzleberry',
    name: 'Dazzleberry',
    displayName: 'DAZZLEBERRY',
    category: 'Mixed Land Use',
    location: 'GMS Road, Dehradun',
    projectType: 'Mixed Land Use',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A mixed-use development on GMS Road that brings together retail, hospitality, and community functions within a single built form. The design navigates between public activation and private function, creating a layered urban experience.',
    thumbnail: '/images/gallery/thumb-22.png',
    heroImage: '/images/gallery/thumb-22.png',
    images: [
      { src: '/images/gallery/thumb-22.png', alt: 'Dazzleberry', full: true },
    ],
    hasDrawing: false,
  },
  {
    slug: 'the-brick-house',
    name: 'The Brick House',
    displayName: 'THE BRICK HOUSE',
    category: 'Residential- Architecture & Interior',
    location: "Engineer's Enclave, Dehradun",
    projectType: 'Residential Architecture | Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      "Built in the material language of brick, The Brick House is a meditation on texture, mass, and the quality of light. The design uses exposed brick not just as a surface material but as the primary ordering element—its coursing, bond, and joinery all contribute to the spatial character of the home.",
    thumbnail: '/images/gallery/thumb-23.png',
    heroImage: '/images/gallery/thumb-23.png',
    images: [
      { src: '/images/gallery/thumb-23.png', alt: 'The Brick House', full: true },
      { src: '/images/gallery/thumb-24.png', alt: 'The Brick House Detail' },
    ],
    hasDrawing: true,
  },
  {
    slug: 'rivulet',
    name: 'Rivulet',
    displayName: 'RIVULET',
    category: 'Residential',
    location: 'Canal Road, Dehradun',
    projectType: 'Residential',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A residence along Canal Road that takes its character from the water flowing nearby. The design channels natural light and breeze through its sections, and organizes rooms around a central courtyard that acts as the domestic heart of the home.',
    thumbnail: '/images/gallery/thumb-01.png',
    heroImage: '/images/gallery/thumb-01.png',
    images: [{ src: '/images/gallery/thumb-01.png', alt: 'Rivulet', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'naturoville',
    name: 'Naturoville',
    displayName: 'NATUROVILLE',
    category: 'Hospitality',
    location: 'Lal Tappar, Rishikesh',
    projectType: 'Hospitality',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A wellness retreat in Lal Tappar, Rishikesh, Naturoville integrates built form with the landscape of the Shivalik foothills. Spaces are designed for contemplation, healing, and reconnection with nature—each room and pathway considered as part of a larger therapeutic environment.',
    thumbnail: '/images/gallery/thumb-03.png',
    heroImage: '/images/gallery/thumb-03.png',
    images: [{ src: '/images/gallery/thumb-03.png', alt: 'Naturoville', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'sfm-living',
    name: 'SFM Living',
    displayName: 'SFM LIVING',
    category: 'Commercial- Interior',
    location: 'EC Road, Dehradun',
    projectType: 'Commercial Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A commercial interior project on EC Road that brings together furniture showroom and lifestyle brand under a single cohesive design vision. The space is organized to allow browsing and dwelling, with vignettes that suggest how pieces can be assembled into liveable environments.',
    thumbnail: '/images/gallery/thumb-05.png',
    heroImage: '/images/gallery/thumb-05.png',
    images: [{ src: '/images/gallery/thumb-05.png', alt: 'SFM Living', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'farzi-cafe',
    name: 'FARZI Cafe',
    displayName: 'FARZI CAFE',
    category: 'Hospitality',
    location: 'Rajpur, Dehradun',
    projectType: 'Hospitality Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'The Dehradun outpost of the FARZI Cafe brand, designed to balance the energy of a popular restaurant chain with the more intimate character of the Rajpur Road location. The interior is layered—playful at the surface but materially considered throughout.',
    thumbnail: '/images/gallery/thumb-07.png',
    heroImage: '/images/gallery/thumb-07.png',
    images: [{ src: '/images/gallery/thumb-07.png', alt: 'FARZI Cafe', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'urban-estates-office',
    name: 'Urban Estates Office, 2nd Floor',
    displayName: 'URBAN ESTATES OFFICE',
    category: 'Office- Interior',
    location: 'Rajpur Rd. Dehradun',
    projectType: 'Office Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'An office interior on Rajpur Road designed around the idea of productive calm. The layout distinguishes between collaborative and focused work zones through spatial hierarchy and material change rather than physical partitions.',
    thumbnail: '/images/gallery/thumb-09.png',
    heroImage: '/images/gallery/thumb-09.png',
    images: [{ src: '/images/gallery/thumb-09.png', alt: 'Urban Estates Office', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'disha-cafe',
    name: 'Disha cafe',
    displayName: 'DISHA CAFE',
    category: 'Office- Interior',
    location: 'Rajpur Rd. Dehradun',
    projectType: 'Office Interior',
    projectStatus: 'Completed',
    siteArea: '',
    description:
      'A café interior on Rajpur Road that serves as both a destination and a workspace. The design creates a layered environment where one can move from high-energy social spaces near the entrance to quieter, more private zones towards the rear.',
    thumbnail: '/images/gallery/thumb-11.png',
    heroImage: '/images/gallery/thumb-11.png',
    images: [{ src: '/images/gallery/thumb-11.png', alt: 'Disha Cafe', full: true }],
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
    thumbnail: '/images/gallery/thumb-13.png',
    heroImage: '/images/gallery/thumb-13.png',
    images: [{ src: '/images/gallery/thumb-13.png', alt: 'Mystic Fox Cafe', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'elemento',
    name: 'Elemento',
    displayName: 'ELEMENTO',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Hospitality Architecture',
    projectStatus: 'Ongoing',
    siteArea: '',
    description:
      'Designed as a contemporary hillside retreat, this hotel in Mussoorie balances simplicity with a strong architectural rhythm. The facade is articulated through a grid of balconies, vertical fins, and textured surfaces, creating a play of light and shadow that evolves through the day and comes alive at night. Each room opens outward, framing views of the hills while maintaining a sense of privacy and calm.',
    thumbnail: '/images/projects/elemento.png',
    heroImage: '/images/projects/elemento.png',
    images: [{ src: '/images/projects/elemento.png', alt: 'Elemento', full: true }],
    hasDrawing: false,
  },
  {
    slug: 'ostello',
    name: 'Ostello',
    displayName: 'OSTELLO',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Residential',
    projectStatus: 'Ongoing',
    siteArea: '',
    description:
      'A residential project in Dehradun exploring the intersection of contemporary living and traditional craft. Ostello is characterized by its careful material palette and the integration of handcrafted elements within a rigorously modern framework.',
    thumbnail: '/images/gallery/thumb-24.png',
    heroImage: '/images/gallery/thumb-24.png',
    images: [{ src: '/images/gallery/thumb-24.png', alt: 'Ostello', full: true }],
    hasDrawing: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

// Gallery items: map 24 thumbnails to projects for the gallery page
export interface GalleryItem {
  src: string;
  projectSlug: string;
  projectName: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/projects/golf-greens-hero.png',    projectSlug: 'golf-greens-residence',   projectName: 'Golf Greens Residence',    alt: 'Golf Greens Residence' },
  { src: '/images/gallery/thumb-01.png',             projectSlug: 'golf-greens-residence',   projectName: 'Golf Greens Residence',    alt: 'Golf Greens Residence' },
  { src: '/images/projects/the-hideaway-hero.png',   projectSlug: 'the-hideaway',            projectName: 'The Hideaway',             alt: 'The Hideaway' },
  { src: '/images/gallery/thumb-03.png',             projectSlug: 'the-hideaway',            projectName: 'The Hideaway',             alt: 'The Hideaway' },
  { src: '/images/projects/edifice-hero.png',        projectSlug: 'edifice',                 projectName: 'Edifice',                  alt: 'Edifice' },
  { src: '/images/gallery/thumb-06.png',             projectSlug: 'edifice',                 projectName: 'Edifice',                  alt: 'Edifice' },
  { src: '/images/projects/sb-sons-hero.png',        projectSlug: 'sb-sons-hardware-store',  projectName: 'SB Sons Hardware Store',   alt: 'SB Sons Hardware Store' },
  { src: '/images/projects/altus-house-hero.png',    projectSlug: 'altus-house',             projectName: 'Altus House',              alt: 'Altus House' },
  { src: '/images/gallery/thumb-09.png',             projectSlug: 'altus-house',             projectName: 'Altus House',              alt: 'Altus House' },
  { src: '/images/projects/bidholi-hero.png',        projectSlug: 'bidholi-hostel',          projectName: 'Bidholi Hostel',           alt: 'Bidholi Hostel' },
  { src: '/images/projects/celebrity-hero.png',      projectSlug: 'celebrity-apartments',    projectName: 'Celebrity Apartments',     alt: 'Celebrity Apartments' },
  { src: '/images/projects/interlock-hero.png',      projectSlug: 'the-interlock-house',     projectName: 'The Interlock House',      alt: 'The Interlock House' },
  { src: '/images/gallery/thumb-13.png',             projectSlug: 'dazzleberry',             projectName: 'Dazzleberry',              alt: 'Dazzleberry' },
  { src: '/images/gallery/thumb-14.png',             projectSlug: 'the-brick-house',         projectName: 'The Brick House',          alt: 'The Brick House' },
  { src: '/images/gallery/thumb-15.png',             projectSlug: 'rivulet',                 projectName: 'Rivulet',                  alt: 'Rivulet' },
  { src: '/images/gallery/thumb-16.png',             projectSlug: 'naturoville',             projectName: 'Naturoville',              alt: 'Naturoville' },
  { src: '/images/gallery/thumb-17.png',             projectSlug: 'sfm-living',              projectName: 'SFM Living',               alt: 'SFM Living' },
  { src: '/images/gallery/thumb-18.png',             projectSlug: 'farzi-cafe',              projectName: 'FARZI Cafe',               alt: 'FARZI Cafe' },
  { src: '/images/gallery/thumb-19.png',             projectSlug: 'urban-estates-office',    projectName: 'Urban Estates Office',     alt: 'Urban Estates Office' },
  { src: '/images/gallery/thumb-20.png',             projectSlug: 'disha-cafe',              projectName: 'Disha Cafe',               alt: 'Disha Cafe' },
  { src: '/images/gallery/thumb-21.png',             projectSlug: 'mystic-fox-cafe',         projectName: 'Mystic Fox Cafe',          alt: 'Mystic Fox Cafe' },
  { src: '/images/projects/elemento.png',            projectSlug: 'elemento',                projectName: 'Elemento',                 alt: 'Elemento' },
  { src: '/images/gallery/thumb-23.png',             projectSlug: 'ostello',                 projectName: 'Ostello',                  alt: 'Ostello' },
  { src: '/images/gallery/thumb-24.png',             projectSlug: 'ostello',                 projectName: 'Ostello',                  alt: 'Ostello' },
];
