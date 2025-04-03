
import { Crop } from './types';

export const others: Crop[] = [
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
