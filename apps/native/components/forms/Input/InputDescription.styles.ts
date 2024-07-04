import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  description: {
    color: theme.colors.grayText,
    paddingLeft: theme.spacing.xs,
    variants: {
      state: {
        error: {
          color: theme.colors.errorText,
        },
      },
    },
  },
}));

export type InputDescriptionVariants = UnistylesVariants<typeof stylesheet>;

export default stylesheet;
