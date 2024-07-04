import { View, ViewProps } from 'react-native';
import { PropsWithChildren } from 'react';
import { useStyles } from 'react-native-unistyles';

import stylesheet from './InputContainer.styles';

type InputContainerProps = ViewProps;

export function InputContainer({
  style,
  ...props
}: PropsWithChildren<InputContainerProps>) {
  const { styles } = useStyles(stylesheet);
  return <View style={[styles.container, style]} {...props} />;
}
