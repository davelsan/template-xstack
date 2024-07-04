import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: (pressed: boolean) => ({
    padding: theme.spacing.sm,
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
  menu: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  text: {
    paddingLeft: theme.spacing.md,
    fontSize: theme.fontSizes.body1,
  },
  title: (pressed: boolean) => ({
    fontSize: theme.fontSizes.menu,
    color: pressed ? theme.colors.grayTextContrast : theme.colors.accentText,
  }),
}));

export default stylesheet;
