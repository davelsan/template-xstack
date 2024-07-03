import { createStyleSheet, UnistylesRuntime } from 'react-native-unistyles';

const styleSheet = createStyleSheet((theme) => ({
  view: {
    flex: 1,
  },
  top: {
    paddingTop: UnistylesRuntime.insets.top,
  },
  right: {
    paddingRight: UnistylesRuntime.insets.right,
  },
  bottom: {
    paddingBottom: UnistylesRuntime.insets.bottom,
  },
  left: {
    paddingLeft: UnistylesRuntime.insets.left,
  },
}));

export default styleSheet;
