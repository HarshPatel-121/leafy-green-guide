
import { Crop } from './types';

export const vegetables: Crop[] = [
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
  }
];
