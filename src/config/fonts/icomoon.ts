import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from './selection.json';

const expoAssetId = require('../../assets/fonts/icomoon.ttf');

export const IcoMoon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'IcoMoon',
  expoAssetId
);

export const icoMoonIconNames = {
  logo: 'logo',
  check: 'check',
  caret_left: 'caret_left',
  x: 'x',
  gear: 'gear',
  chart: 'chart',
  trash: 'trash',
};

export type IcoMoonIconName = keyof typeof icoMoonIconNames;
