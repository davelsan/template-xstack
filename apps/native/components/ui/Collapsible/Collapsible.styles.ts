import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  content: {
    marginTop: theme.spacing.xs,
    marginLeft: theme.spacing.xl,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  icon: {
    color: theme.colors.graySolid,
  },
}));

export default styleSheet;
