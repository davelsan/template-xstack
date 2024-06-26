import { View, type ViewProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import styleSheet from './ThemedView.css';

export type ThemedViewProps = ViewProps & {
  //
};

export function ThemedView({ style, ...props }: ThemedViewProps) {
  const { styles } = useStyles(styleSheet);
  return <View style={[styles.view, style]} {...props} />;
}
