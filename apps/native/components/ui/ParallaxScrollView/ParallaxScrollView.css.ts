import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
    backgroundColor: theme.colors.infoBgActive,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
}));

export default styleSheet;
