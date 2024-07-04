import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  controls: {
    gap: theme.spacing.md,
  },
  view: {
    flex: 1,
    padding: theme.spacing.lg,
    gap: theme.spacing['2xl'],
  },
}));

export default stylesheet;
