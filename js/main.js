import { createAd } from './ad.js';
import { ADS_NUMBER } from './data.js';

const ads = Array.from({length: ADS_NUMBER}, createAd);
