import { useStyles } from 'react-native-unistyles';

import { Text, TextProps } from '@typography/Text';

import stylesheet, {
  InputDescriptionVariants,
} from './InputDescription.styles';

type InputDescriptionProps = TextProps & InputDescriptionVariants;

export function InputDescription({
  state,
  style,
  ...props
}: InputDescriptionProps) {
  const { styles } = useStyles(stylesheet, { state });
  return <Text style={[styles.description, style]} {...props} />;
}
