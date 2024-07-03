import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  headerImage: {
    color: theme.colors.infoSolid,
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
}));

export default styleSheet;
