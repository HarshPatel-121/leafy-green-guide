
import { Crop } from './types';

export const fruits: Crop[] = [
  {
    id: 'apple',
    name: 'Apple',
    category: 'fruits',
    description: 'A crisp, sweet fruit grown on deciduous trees.',
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/52/93/81/1000_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg',
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
  }
];
