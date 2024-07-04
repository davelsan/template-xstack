import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  view: {
    padding: theme.spacing.lg,
    gap: theme.spacing.md,
  },
}));

export default stylesheet;
