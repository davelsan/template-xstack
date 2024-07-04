import { createStyleSheet, UnistylesVariants } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  input: (focused: boolean) => ({
    padding: theme.spacing.md,
    //
    borderColor: focused ? theme.colors.accentBorder : theme.colors.grayText,
    borderRadius: 10,
    borderWidth: 1,
    //
    color: theme.colors.grayTextContrast,
    fontSize: theme.fontSizes.body1,
    //
    variants: {
      state: {
        error: {
          borderColor: theme.colors.errorBorder,
        },
      },
    },
  }),
}));

export type InputTextVariants = UnistylesVariants<typeof stylesheet>;

export default stylesheet;
