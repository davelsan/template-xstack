import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { StatusBar } from 'expo-status-bar';

import styleSheet from './SafeAreaView.css';

type SafeAreaViewProps = {
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
};

export function SafeAreaView({
  children,
  edges = ['top', 'right', 'bottom', 'left'],
  ...props
}: PropsWithChildren<SafeAreaViewProps>) {
  const { styles } = useStyles(styleSheet);
  const edgeStyles = edges.map((edge) => styles[edge]);

  return (
    <>
      <StatusBar translucent />
      <View style={[styles.view, ...edgeStyles]} {...props}>
        {children}
      </View>
    </>
  );
}
