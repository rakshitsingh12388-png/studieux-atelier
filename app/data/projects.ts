export interface Project {
  slug: string;
  name: string;
  category: string;
  location: string;
  projectType: string;
  status: string;
  siteArea?: string;
  description: string;
  images: {
    hero: string;       // small top-right hero (642x389)
    wide: string;       // large wide image (1238x750)
    medium?: string;    // medium image (786x476)
    portrait?: string;  // portrait image (824x499)
    extra?: string;     // extra image
    cover: string;      // gallery thumbnail
  };
}

export const projects: Project[] = [
  {
    slug: 'golf-greens-residence',
    name: 'Golf Greens Residence',
    category: 'Residential Landscaping',
    location: 'Golf Greens, Indore',
    projectType: 'Residential Landscape',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy. Linear pathways, structured greens, and tropical planting create a composed framework, while elements like bamboo screens and dense foliage introduce softness and depth.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      extra: '/images/golf-green-05.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'the-hideaway',
    name: 'The Hideaway',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Residential Architecture & Interior',
    status: 'Ongoing',
    siteArea: '',
    description: "A contemporary A-frame retreat tucked into the greens of Mayfair, Dehradun—where bold geometry meets the warmth of timber, stone, and glass. Designed as an intimate Airbnb, the structure opens up to its surroundings, framing light, sky, and trees through expansive glazing and layered outdoor spaces.",
    images: {
      hero: '/images/hideaway-01.png',
      wide: '/images/hideaway-02.png',
      medium: '/images/hideaway-03.png',
      portrait: '/images/hideaway-04.png',
      cover: '/images/hideaway-01.png',
    }
  },
  {
    slug: 'edifice',
    name: 'Edifice',
    category: 'Residential - Interior',
    location: "Engineer's Enclave, Dehradun",
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "A contemporary residence in Engineer's Enclave, Dehradun, designed as a balance of openness and privacy—where clean lines meet layered depth. The façade is defined by vertical fins and recessed balconies, creating a rhythmic play of light, shadow, and form across the elevation.",
    images: {
      hero: '/images/edifice-01.png',
      wide: '/images/edifice-02.png',
      portrait: '/images/edifice-03.png',
      cover: '/images/edifice-01.png',
    }
  },
  {
    slug: 'sb-sons-hardware-store',
    name: 'SB Sons Hardware Store',
    category: 'Commercial - Interior',
    location: 'Kanwali Rd, Dehradun',
    projectType: 'Commercial Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as more than just a retail space, SB Sons Hardware Store reimagines the experience of browsing materials as a curated journey. The interiors are structured through clean lines and linear pathways, guiding movement while showcasing products with precision and order.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'altus-house',
    name: 'Altus House',
    category: 'Hospitality',
    location: 'Mussoorie',
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy. Linear pathways, structured greens, and tropical planting create a composed framework.",
    images: {
      hero: '/images/altus-01.png',
      wide: '/images/altus-02.png',
      medium: '/images/altus-03.png',
      portrait: '/images/altus-04.png',
      extra: '/images/altus-05.png',
      cover: '/images/altus-01.png',
    }
  },
  {
    slug: 'bidholi-hostel',
    name: 'Bidholi Hostel',
    category: 'Residential - Architecture & Interior',
    location: 'Bidholi, Dehradun',
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'celebrity-apartments',
    name: 'Celebrity Apartments',
    category: 'Residential - Interior',
    location: 'Balbir Road, Dehradun',
    projectType: 'Residential Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy. Linear pathways, structured greens, and tropical planting create a composed framework.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'the-interlock-house',
    name: 'The Interlock House',
    category: 'Residential - Exterior & Interior',
    location: '41, Vijay Park, Dehradun',
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "A study in form and function, this residence is shaped through bold volumes, clean lines, and a layered composition that reveals itself gradually. The architecture embraces an industrial design language—expressed through strong geometries, exposed textures, and monochromatic tones.",
    images: {
      hero: '/images/interlock-01.png',
      wide: '/images/interlock-02.png',
      medium: '/images/interlock-03.png',
      portrait: '/images/interlock-04.png',
      cover: '/images/interlock-01.png',
    }
  },
  {
    slug: 'dazzleberry',
    name: 'Dazzleberry',
    category: 'Mixed Land Use',
    location: 'GMS Road, Dehradun',
    projectType: 'Mixed Land Use',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/dazzleberry-01.png',
      wide: '/images/dazzleberry-02.png',
      medium: '/images/dazzleberry-03.png',
      portrait: '/images/dazzleberry-04.png',
      cover: '/images/dazzleberry-01.png',
    }
  },
  {
    slug: 'the-brick-house',
    name: 'The Brick House',
    category: 'Residential - Architecture & Interior',
    location: "Engineer's Enclave, Dehradun",
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/brickhouse-01.png',
      wide: '/images/brickhouse-02.png',
      medium: '/images/brickhouse-03.png',
      portrait: '/images/brickhouse-04.png',
      cover: '/images/brickhouse-01.png',
    }
  },
  {
    slug: 'rivulet',
    name: 'Rivulet',
    category: 'Residential',
    location: 'Canal Road, Dehradun',
    projectType: 'Residential',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/rivulet-01.png',
      wide: '/images/rivulet-02.png',
      medium: '/images/rivulet-03.png',
      portrait: '/images/rivulet-04.png',
      cover: '/images/rivulet-01.png',
    }
  },
  {
    slug: 'naturoville',
    name: 'Naturoville',
    category: 'Hospitality',
    location: 'Lal Tappar, Rishikesh',
    projectType: 'Hospitality Architecture',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/naturoville-01.png',
      wide: '/images/naturoville-02.png',
      portrait: '/images/naturoville-03.png',
      cover: '/images/naturoville-01.png',
    }
  },
  {
    slug: 'sfm-living',
    name: 'SFM Living',
    category: 'Commercial - Interior',
    location: 'EC Road, Dehradun',
    projectType: 'Commercial Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/sfm-01.png',
      wide: '/images/sfm-02.png',
      medium: '/images/sfm-03.png',
      portrait: '/images/sfm-04.png',
      cover: '/images/sfm-01.png',
    }
  },
  {
    slug: 'farzi-cafe',
    name: 'FARZI Cafe',
    category: 'Hospitality',
    location: 'Rajpur, Dehradun',
    projectType: 'Hospitality Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/farzi-01.png',
      wide: '/images/farzi-02.png',
      medium: '/images/farzi-03.png',
      portrait: '/images/farzi-04.png',
      cover: '/images/farzi-01.png',
    }
  },
  {
    slug: 'urban-estates-office',
    name: 'Urban Estates Office, 2nd Floor',
    category: 'Office - Interior',
    location: 'Rajpur Rd, Dehradun',
    projectType: 'Office Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'dishas-cafe',
    name: "Disha's Cafe",
    category: 'Hospitality - Interior',
    location: 'Dehradun',
    projectType: 'Hospitality Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/disha-01.png',
      wide: '/images/disha-02.png',
      medium: '/images/disha-03.png',
      portrait: '/images/disha-04.png',
      cover: '/images/disha-01.png',
    }
  },
  {
    slug: 'mystic-fox-cafe',
    name: 'Mystic Fox Cafe',
    category: 'Hospitality - Interior',
    location: 'Mussoorie',
    projectType: 'Hospitality Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/mysticfox-01.png',
      wide: '/images/mysticfox-02.png',
      medium: '/images/mysticfox-03.png',
      portrait: '/images/mysticfox-04.png',
      cover: '/images/mysticfox-01.png',
    }
  },
  {
    slug: 'elemento',
    name: 'Elemento',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Hospitality Architecture',
    status: 'Ongoing',
    siteArea: '',
    description: "Designed as a contemporary hillside retreat, this hotel in Mussoorie balances simplicity with a strong architectural rhythm. The façade is articulated through a grid of balconies, vertical fins, and textured surfaces, creating a play of light and shadow throughout the day.",
    images: {
      hero: '/images/elemento-01.png',
      wide: '/images/elemento-02.png',
      medium: '/images/elemento-03.png',
      portrait: '/images/elemento-04.png',
      cover: '/images/elemento-01.png',
    }
  },
  {
    slug: 'ostello',
    name: 'Ostello',
    category: 'Residential',
    location: 'Dehradun',
    projectType: 'Residential',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/ostello-01.png',
      wide: '/images/ostello-02.png',
      medium: '/images/ostello-03.png',
      portrait: '/images/ostello-04.png',
      cover: '/images/ostello-01.png',
    }
  },
  {
    slug: 'jb-residence',
    name: 'JB Residence',
    category: 'Landscape',
    location: 'Indore',
    projectType: 'Landscape',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/golf-green-01.png',
      wide: '/images/golf-green-03.png',
      medium: '/images/golf-green-04.png',
      portrait: '/images/golf-green-02.png',
      cover: '/images/golf-green-01.png',
    }
  },
  {
    slug: 'mittal-residence',
    name: 'Mittal Residence',
    category: 'Landscape',
    location: 'Indore',
    projectType: 'Landscape',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/mittal-01.png',
      wide: '/images/mittal-02.png',
      medium: '/images/mittal-03.png',
      portrait: '/images/mittal-04.png',
      cover: '/images/mittal-01.png',
    }
  },
  {
    slug: 'group-housing',
    name: 'Group Housing',
    category: 'Residential - Architecture & Interior',
    location: 'Purkul, Dehradun',
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/grouphousing-01.png',
      wide: '/images/grouphousing-02.png',
      medium: '/images/grouphousing-03.png',
      portrait: '/images/grouphousing-04.png',
      cover: '/images/grouphousing-01.png',
    }
  },
  {
    slug: 'sau-jan-estate',
    name: 'Sau Jan Estate',
    category: 'Residential - Architecture & Interior',
    location: 'Mussoorie',
    projectType: 'Residential Architecture & Interior',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/saujan-01.png',
      wide: '/images/saujan-02.png',
      medium: '/images/saujan-03.png',
      portrait: '/images/saujan-04.png',
      cover: '/images/saujan-01.png',
    }
  },
  {
    slug: 'sadana-house',
    name: 'Sadana House',
    category: 'Residential Landscaping',
    location: 'Dalanwala, Dehradun',
    projectType: 'Residential Landscaping',
    status: 'Completed',
    siteArea: '',
    description: "Designed as a seamless extension of the home's contemporary architecture, the landscape unfolds as a series of calm, layered spaces that balance openness with privacy.",
    images: {
      hero: '/images/sadana-01.png',
      wide: '/images/sadana-02.png',
      medium: '/images/sadana-03.png',
      portrait: '/images/sadana-04.png',
      cover: '/images/sadana-01.png',
    }
  },
];

// Gallery images list (all unique images for the gallery page)
export const galleryImages = [
  '/images/golf-green-01.png',
  '/images/gallery-02.png',
  '/images/gallery-03.png',
  '/images/gallery-04.png',
  '/images/gallery-05.png',
  '/images/gallery-06.png',
  '/images/gallery-07.png',
  '/images/gallery-08.png',
  '/images/gallery-09.png',
  '/images/gallery-10.png',
  '/images/gallery-11.png',
  '/images/gallery-12.png',
  '/images/gallery-13.png',
  '/images/gallery-14.png',
  '/images/gallery-15.png',
  '/images/gallery-16.png',
  '/images/gallery-17.png',
  '/images/gallery-18.png',
  '/images/gallery-19.png',
  '/images/gallery-20.png',
  '/images/gallery-21.png',
  '/images/gallery-22.png',
  '/images/gallery-23.png',
  '/images/gallery-24.png',
];
