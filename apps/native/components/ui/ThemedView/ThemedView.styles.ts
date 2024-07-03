import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  view: {
    backgroundColor: theme.colors.grayBase,
  },
}));

export default styleSheet;
