import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: theme.spacing.sm,
  },
}));

export default stylesheet;
