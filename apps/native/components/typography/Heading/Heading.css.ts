import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      type: {
        h1: {
          fontFamily: theme.fontFace({ family: 'Nunito', face: '700Bold' }),
          fontSize: theme.fontSizes.h1,
          lineHeight: theme.lineHeight(theme.fontSizes.h1, 'base'),
        },
        h2: {
          fontFamily: theme.fontFace({ family: 'Nunito', face: '700Bold' }),
          fontSize: theme.fontSizes.h2,
          lineHeight: theme.lineHeight(theme.fontSizes.h2, 'base'),
        },
        h3: {
          fontFamily: theme.fontFace({ family: 'Nunito', face: '600SemiBold' }),
          fontSize: theme.fontSizes.h3,
          lineHeight: theme.lineHeight(theme.fontSizes.h3, 'base'),
        },
        h4: {
          fontFamily: theme.fontFace({ family: 'Nunito', face: '600SemiBold' }),
          fontSize: theme.fontSizes.h4,
          lineHeight: theme.lineHeight(theme.fontSizes.h4, 'base'),
        },
      },
    },
  },
}));

export type HeadingVariants = UnistylesVariants<typeof styleSheet>;

export default styleSheet;
