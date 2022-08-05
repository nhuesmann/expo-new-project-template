import { Sizes, sizes } from './sizes';

interface Colors {
  primary: string;
  background: string;
  bodyText: string;
  titleText: string;
}

interface Font {
  fontSize: number;
  lineHeight: number;
}

interface Fonts {
  title1: Font;
  title2: Font;
  body: Font;
}

export interface Theme {
  colors: Colors;
  sizes: Sizes;
  fonts: Fonts;
}

export const theme: Theme = {
  colors: {
    primary: 'palevioletred',
    background: 'papayawhip',
    bodyText: 'palevioletred',
    titleText: 'gray',
  },
  sizes,
  fonts: {
    title1: {
      fontSize: 16,
      lineHeight: 24,
    },
    title2: {
      fontSize: 18,
      lineHeight: 27,
    },
    body: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
};
