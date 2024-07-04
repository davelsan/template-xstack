import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  button: (pressed: boolean) => ({
    padding: theme.spacing.md,
    backgroundColor: pressed
      ? theme.colors.accentBgActive
      : theme.colors.accentBg,
    //
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.accentBorder,
  }),
  text: {
    textAlign: 'center',
    fontSize: theme.fontSizes.button,
  },
}));

export default stylesheet;
