
import { Crop, CropCategory } from './types';
import { categories } from './categories';
import { allCrops } from './cropsData';

// Get all crops
export const getAllCrops = (): Crop[] => {
  return allCrops;
};

// Get crops by category
export const getCropsByCategory = (category: CropCategory): Crop[] => {
  return allCrops.filter(crop => crop.category === category);
};

// Get a specific crop by ID
export const getCropById = (id: string): Crop | undefined => {
  return allCrops.find(crop => crop.id === id);
};

// Search crops by name
export const searchCrops = (query: string): Crop[] => {
  const lowercasedQuery = query.toLowerCase();
  return allCrops.filter(crop => 
    crop.name.toLowerCase().includes(lowercasedQuery) || 
    crop.description.toLowerCase().includes(lowercasedQuery)
  );
};

// Re-export everything needed from this file
export { categories } from './categories';
export type { Crop, CropCategory, Fertilizer, GrowthGuide } from './types';
