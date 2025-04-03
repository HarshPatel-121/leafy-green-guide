import { CropCategory, Crop } from './crops';

export type CropCategory = 'vegetables' | 'fruits' | 'flowers' | 'others';

export interface Fertilizer {
  type: 'organic' | 'chemical';
  name: string;
  benefits: string[];
  risks: string[];
  application: string;
}

export interface GrowthGuide {
  sowingTime: string;
  wateringSchedule: string;
  sunlightRequirements: string;
  harvestTime: string;
  spacing: string;
  soilType: string;
  tips: string[];
}

export interface Crop {
  id: string;
  name: string;
  category: CropCategory;
  description: string;
  imageUrl: string;
  growthGuide: GrowthGuide;
  fertilizers: Fertilizer[];
}

export const categories = [
  {
    id: 'vegetables',
    name: 'Vegetables',
    description: 'Nutritious edible plants grown for consumption',
    imageUrl: 'https://media.istockphoto.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=1024x1024&w=is&k=20&c=KcFM8yH2vc3SoAIa0CbX2lVuEA61OBgtKFB1Da8um00=',
  },
  {
    id: 'fruits',
    name: 'Fruits',
    description: 'Sweet and nutritious edible plant structures',
    imageUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
  },
  {
    id: 'flowers',
    name: 'Flowers',
    description: 'Beautiful ornamental flowering plants',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
  },
  {
    id: 'others',
    name: 'Others',
    description: 'Herbs, shrubs, and other useful plants',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
  },
];

// Sample crop data
const crops: Crop[] = [
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'vegetables',
    description: 'A juicy, nutritious fruit commonly used as a vegetable in cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    growthGuide: {
      sowingTime: 'Early spring, 6-8 weeks before last frost',
      wateringSchedule: 'Regular watering, 1-2 inches per week',
      sunlightRequirements: 'Full sun, at least 6-8 hours daily',
      harvestTime: '60-100 days after planting',
      spacing: '24-36 inches between plants',
      soilType: 'Well-draining, slightly acidic soil (pH 6.0-6.8)',
      tips: [
        'Stake or cage plants for support',
        'Pinch off suckers for bigger fruit',
        'Mulch to retain moisture and prevent disease'
      ]
    },
    fertilizers: [
      {
        type: 'organic',
        name: 'Compost',
        benefits: [
          'Improves soil structure',
          'Provides slow-release nutrients',
          'Enhances beneficial soil microbes'
        ],
        risks: [
          'May not provide enough nutrients for heavy feeders',
          'Nutrient content can vary'
        ],
        application: 'Apply 2-3 inches around plants at planting and monthly thereafter.'
      },
      {
        type: 'chemical',
        name: '10-10-10 NPK Fertilizer',
        benefits: [
          'Balanced nutrient ratio',
          'Fast-acting',
          'Precise nutrient content'
        ],
        risks: [
          'Can burn plants if over-applied',
          'May leach into groundwater',
          'Potential environmental impact'
        ],
        application: 'Apply 1 tablespoon per plant every 4-6 weeks, keeping away from stems.'
      }
    ]
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    category: 'vegetables',
    description: 'A refreshing, water-rich vegetable perfect for salads and pickling.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    growthGuide: {
      sowingTime: 'After all danger of frost has passed, soil temperature at least 60°F',
      wateringSchedule: 'Consistent moisture, 1-2 inches per week',
      sunlightRequirements: 'Full sun, 6+ hours daily',
      harvestTime: '50-70 days after planting',
      spacing: '36-60 inches between plants',
      soilType: 'Rich, well-draining soil with pH 6.0-7.0',
      tips: [
        'Provide trellis for vining varieties',
        'Harvest regularly to encourage production',
        'Keep foliage dry to prevent disease'
      ]
    },
    fertilizers: [
      {
        type: 'organic',
        name: 'Fish Emulsion',
        benefits: [
          'Rich in nitrogen',
          'Contains trace minerals',
          'Gentle on plants'
        ],
        risks: [
          'Odor can be unpleasant',
          'May attract pests if not applied correctly'
        ],
        application: 'Apply every 3-4 weeks, diluted per package instructions.'
      },
      {
        type: 'chemical',
        name: '5-10-10 Fertilizer',
        benefits: [
          'Promotes fruit development',
          'Balanced for fruiting vegetables',
          'Long-lasting'
        ],
        risks: [
          'Potential salt buildup',
          'Environmental concerns with runoff',
          'Can burn plants if over-applied'
        ],
        application: 'Side dress with 1-2 tablespoons per plant when flowering begins.'
      }
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    category: 'fruits',
    description: 'A crisp, sweet fruit grown on deciduous trees.',
    imageUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    growthGuide: {
      sowingTime: 'Plant dormant trees in early spring or late fall',
      wateringSchedule: 'Deep watering weekly in first year, then as needed',
      sunlightRequirements: 'Full sun, at least 6-8 hours daily',
      harvestTime: '2-5 years for first substantial harvest',
      spacing: '15-20 feet between trees',
      soilType: 'Well-draining loamy soil, pH 6.0-7.0',
      tips: [
        'Requires a pollination partner for most varieties',
        'Annual pruning improves air circulation and fruit production',
        'Thin fruit to increase size and prevent branch damage'
      ]
    },
    fertilizers: [
      {
        type: 'organic',
        name: 'Composted Manure',
        benefits: [
          'Improves soil structure',
          'Slow-release nutrients',
          'Adds beneficial microorganisms'
        ],
        risks: [
          'Can introduce weeds if not properly composted',
          'Slow nutrient availability'
        ],
        application: 'Apply 1-2 inches around drip line in early spring before growth begins.'
      },
      {
        type: 'chemical',
        name: '10-6-4 Fruit Tree Fertilizer',
        benefits: [
          'Formulated specifically for fruit trees',
          'Balanced for fruit production',
          'Precise nutrient content'
        ],
        risks: [
          'Can promote excessive vegetative growth if over-applied',
          'Potential environmental impact',
          'Can burn roots if applied incorrectly'
        ],
        application: 'Apply according to tree age and size following package directions, typically in early spring.'
      }
    ]
  },
  {
    id: 'rose',
    name: 'Rose',
    category: 'flowers',
    description: 'A beloved ornamental flower known for its beauty and fragrance.',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    growthGuide: {
      sowingTime: 'Plant dormant bare-root roses in early spring or fall',
      wateringSchedule: 'Deep watering 1-2 times weekly at base of plant',
      sunlightRequirements: 'Full sun, 6+ hours daily',
      harvestTime: 'Flowers can be cut throughout blooming season',
      spacing: '2-3 feet for shrub roses, 4-6 feet for climbers',
      soilType: 'Well-draining, rich loamy soil, pH 6.0-6.5',
      tips: [
        'Prune in early spring before new growth',
        'Apply mulch to retain moisture and suppress weeds',
        'Watch for common pests like aphids and Japanese beetles'
      ]
    },
    fertilizers: [
      {
        type: 'organic',
        name: 'Alfalfa Meal',
        benefits: [
          'Contains triacontanol, a growth stimulant',
          'Adds organic matter to soil',
          'Gentle, slow-release feeding'
        ],
        risks: [
          'May attract rabbits and other animals',
          'Slower to show results than chemical options'
        ],
        application: 'Apply 1 cup per bush in early spring, working lightly into soil.'
      },
      {
        type: 'chemical',
        name: 'Rose-specific Fertilizer (12-4-8)',
        benefits: [
          'Formulated specifically for roses',
          'Quick results',
          'Contains micronutrients needed for blooming'
        ],
        risks: [
          'Can burn plants if over-applied',
          'May leach into groundwater',
          'Requires careful application'
        ],
        application: 'Apply monthly during growing season following package directions, stopping 6-8 weeks before first frost.'
      }
    ]
  },
  {
    id: 'basil',
    name: 'Basil',
    category: 'others',
    description: 'A fragrant culinary herb used in many cuisines.',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    growthGuide: {
      sowingTime: 'After all danger of frost, soil temperature at least 60°F',
      wateringSchedule: 'Regular watering, keeping soil consistently moist but not waterlogged',
      sunlightRequirements: 'Full sun to part shade, minimum 6 hours daily',
      harvestTime: '3-4 weeks after planting for first harvest',
      spacing: '10-12 inches between plants',
      soilType: 'Rich, well-draining soil with pH 6.0-7.0',
      tips: [
        'Pinch off flower buds to encourage leaf production',
        'Harvest from the top down, cutting just above a leaf pair',
        'Can be grown indoors year-round in a sunny window'
      ]
    },
    fertilizers: [
      {
        type: 'organic',
        name: 'Worm Castings',
        benefits: [
          'Gentle, won\'t burn plants',
          'Improves soil structure',
          'Contains beneficial microorganisms'
        ],
        risks: [
          'May not provide enough nutrients for heavy feeders',
          'More expensive than some alternatives'
        ],
        application: 'Mix into soil before planting and top dress monthly with 1 tablespoon per plant.'
      },
      {
        type: 'chemical',
        name: 'Water-soluble Herb Fertilizer',
        benefits: [
          'Balanced for leaf production',
          'Fast-acting',
          'Easy to control application'
        ],
        risks: [
          'Can affect flavor if applied too close to harvest',
          'Potential runoff concerns',
          'Can burn plants if over-applied'
        ],
        application: 'Apply half-strength solution every 2-3 weeks, avoiding foliage.'
      }
    ]
  }
];

// Get all crops
export const getAllCrops = (): Crop[] => {
  return crops;
};

// Get crops by category
export const getCropsByCategory = (category: CropCategory): Crop[] => {
  return crops.filter(crop => crop.category === category);
};

// Get a specific crop by ID
export const getCropById = (id: string): Crop | undefined => {
  return crops.find(crop => crop.id === id);
};

// Search crops by name
export const searchCrops = (query: string): Crop[] => {
  const lowercasedQuery = query.toLowerCase();
  return crops.filter(crop => 
    crop.name.toLowerCase().includes(lowercasedQuery) || 
    crop.description.toLowerCase().includes(lowercasedQuery)
  );
};
