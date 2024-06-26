export type Mono = {
  family: 'SpaceMono';
  face: '400Regular';
};

export type Sans = {
  family: 'Nunito';
  face:
    | '900Black'
    | '700Bold'
    | '600SemiBold'
    | '500Medium'
    | '400Regular'
    | '300Light';
};

export type FontFace = Mono | Sans;

export function fontFace(font: FontFace) {
  return `${font.family}_${font.face}`;
}

export const fontSizes = {
  h1: 38,
  h2: 32,
  h3: 25,
  h4: 21,
  body1: 17,
  body2: 15,
  body3: 12,
  body4: 9,
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export function lineHeight(
  fontSize: number,
  mod: 'base' | 'md' | 'lg' | 'xl' = 'base'
) {
  let value = 0.725;
  switch (mod) {
    case 'base':
      value = 0.725;
      break;
    case 'md':
      value = 0.85;
      break;
    case 'lg':
      value = 1;
      break;
    case 'xl':
      value = 1.25;
      break;
  }
  return fontSize + 16 * value;
}
