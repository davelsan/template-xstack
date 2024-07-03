import { useStyles } from 'react-native-unistyles';

import { Text, TextProps } from '../Text';

import styleSheet, { HeadingVariants } from './Heading.styles';

type HeadingProps = TextProps & HeadingVariants;

export function Heading({ children, style, type = 'h1' }: HeadingProps) {
  const { styles } = useStyles(styleSheet, {
    type,
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
}
