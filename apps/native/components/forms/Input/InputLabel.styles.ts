import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  label: {
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

export type InputLabelVariants = UnistylesVariants<typeof stylesheet>;

export default stylesheet;
