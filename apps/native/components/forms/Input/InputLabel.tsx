import { useStyles } from 'react-native-unistyles';

import { Text, TextProps } from '@typography/Text';

import stylesheet, { InputLabelVariants } from './InputLabel.styles';

type InputLabelProps = TextProps & InputLabelVariants;

export function InputLabel({ intent, style, ...props }: InputLabelProps) {
  const { styles } = useStyles(stylesheet, { intent });
  return <Text style={[styles.label, style]} {...props} />;
}
