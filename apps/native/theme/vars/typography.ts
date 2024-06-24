import { fontSizes, lineHeight, Nunito } from './fonts';

export const typography = {
  // Headings
  h1: {
    fontFamily: Nunito.bold,
    fontSize: fontSizes.h1,
    lineHeight: lineHeight(fontSizes.h1, 'base'),
  },
  h2: {
    fontFamily: Nunito.bold,
    fontSize: fontSizes.h2,
    lineHeight: lineHeight(fontSizes.h2, 'base'),
  },
  h3: {
    fontFamily: Nunito.bold,
    fontSize: fontSizes.h3,
    lineHeight: lineHeight(fontSizes.h3, 'base'),
  },
  h4: {
    fontFamily: Nunito.bold,
    fontSize: fontSizes.h4,
    lineHeight: lineHeight(fontSizes.h4, 'base'),
  },
  // Body
  body: {
    fontFamily: Nunito.regular,
    fontSize: fontSizes.body1,
    lineHeight: lineHeight(fontSizes.body1, 'base'),
  },
  label: {
    fontFamily: Nunito.regular,
    fontSize: fontSizes.body2,
    lineHeight: lineHeight(fontSizes.body2, 'base'),
  },
  caption: {
    fontFamily: Nunito.regular,
    fontSize: fontSizes.body3,
    lineHeight: lineHeight(fontSizes.body3, 'base'),
  },
  // Components
  button: {
    fontFamily: Nunito.bold,
    fontSize: fontSizes.body1,
  },
};
