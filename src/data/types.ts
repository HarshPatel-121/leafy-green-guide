
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

export interface Category {
  id: CropCategory;
  name: string;
  description: string;
  imageUrl: string;
}
