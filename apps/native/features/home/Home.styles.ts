import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  stepContainer: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
}));

export default styleSheet;
