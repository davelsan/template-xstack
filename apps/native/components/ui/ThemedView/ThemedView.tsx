import { View, type ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ThemedViewProps = ViewProps & {
  //
};

export function ThemedView({ style, ...props }: ThemedViewProps) {
  const { styles } = useStyles(stylesheet);
  return <View style={[styles.view, style]} {...props} />;
}

const stylesheet = createStyleSheet((theme) => ({
  view: {
    backgroundColor: theme.colors.grayBase,
  },
}));
