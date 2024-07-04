import { useStyles } from 'react-native-unistyles';

import { Text, TextProps } from '@typography/Text';

import stylesheet, { InputLabelVariants } from './InputLabel.styles';

type InputLabelProps = TextProps & InputLabelVariants;

export function InputLabel({ state, style, ...props }: InputLabelProps) {
  const { styles } = useStyles(stylesheet, { state });
  return <Text style={[styles.label, style]} {...props} />;
}
