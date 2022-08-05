import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from './selection.json';

const expoAssetId = require('../../assets/fonts/icomoon.ttf');

export const IcoMoon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'IcoMoon',
  expoAssetId
);
