
import { Crop } from './types';

export const flowers: Crop[] = [
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
  }
];
