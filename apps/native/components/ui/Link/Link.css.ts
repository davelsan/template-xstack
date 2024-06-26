import { createStyleSheet } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  link: {
    color: theme.colors.infoText,
  },
}));

export default styleSheet;
