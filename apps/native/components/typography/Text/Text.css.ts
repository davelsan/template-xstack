import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme, rt) => ({
  text: (...args: Parameters<typeof theme.fontFace>) => ({
    fontFamily: theme.fontFace(...args),
    color: theme.colors.grayTextContrast,
    variants: {
      size: {
        body: {
          fontSize: theme.fontSizes.body1,
          lineHeight: theme.lineHeight(theme.fontSizes.body1, 'base'),
        },
        label: {
          fontSize: theme.fontSizes.body2,
          lineHeight: theme.lineHeight(theme.fontSizes.body2, 'base'),
        },
        caption: {
          fontSize: theme.fontSizes.body3,
          lineHeight: theme.lineHeight(theme.fontSizes.body3, 'base'),
        },
      },
    },
  }),
}));

export type TextVariants = UnistylesVariants<typeof styleSheet>;

export default styleSheet;
