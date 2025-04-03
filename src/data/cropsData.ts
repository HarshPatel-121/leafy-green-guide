
import { Crop } from './types';
import { vegetables } from './vegetables';
import { fruits } from './fruits';
import { flowers } from './flowers';
import { others } from './others';

// Combine all crops into a single array
export const allCrops: Crop[] = [
  ...vegetables,
  ...fruits,
  ...flowers,
  ...others
];
