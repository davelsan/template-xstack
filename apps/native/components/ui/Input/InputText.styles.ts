import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  input: {
    padding: theme.spacing.md,
    //
    borderColor: theme.colors.grayText,
    borderRadius: 10,
    borderWidth: 1,
    //
    color: theme.colors.grayTextContrast,
    fontSize: theme.fontSizes.body1,
    variants: {
      intent: {
        default: {},
        error: {},
      },
      state: {
        default: {},
        focused: {
          borderColor: theme.colors.accentBorder,
        },
      },
    },
  },
}));

export type InputTextVariants = UnistylesVariants<typeof stylesheet>;

export default stylesheet;
