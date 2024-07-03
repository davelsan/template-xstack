import { forwardRef } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { FontFace } from '@theme/vars/fonts';

import styleSheet, { TextVariants } from './Text.styles';

export type TextBaseProps = RNTextProps & TextVariants;

export type TextProps = TextBaseProps & {
  font?: FontFace;
};

export const Text = forwardRef<RNText, TextProps>(function TextRef(
  {
    font = { family: 'Nunito', face: '400Regular' },
    size = 'body',
    style,
    ...props
  },
  ref
) {
  const { styles } = useStyles(styleSheet, {
    size,
  });
  return <RNText ref={ref} style={[styles.text(font), style]} {...props} />;
});
