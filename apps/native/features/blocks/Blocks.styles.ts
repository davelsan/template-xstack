import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  menu: (pressed: boolean) => ({
    flexDirection: 'row',
    padding: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
    //
    backgroundColor: pressed
      ? theme.colors.accentBgActive
      : theme.colors.grayBgSubtle,
    //
    borderWidth: 1,
    borderColor: pressed
      ? theme.colors.accentBorderHover
      : theme.colors.grayBorder,
    borderRadius: 10,
  }),
  text: {
    fontSize: theme.fontSizes.menu,
  },
}));

export default stylesheet;
