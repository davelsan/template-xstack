import { forwardRef } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from 'react-native-unistyles';

import { Nunito, SpaceMono } from '@theme/vars/fonts';

export type TextProps = RNTextProps & UnistylesVariants<typeof styleSheet>;

export const Text = forwardRef<RNText, TextProps>(function TextRef(
  { weight, family, style, ...props },
  ref
) {
  const { styles } = useStyles(styleSheet, { family, weight });
  return <RNText ref={ref} style={[styles.text, style]} {...props} />;
});

const styleSheet = createStyleSheet((theme) => ({
  text: {
    ...theme.typography.body,
    color: theme.colors.grayTextContrast,
    variants: {
      family: {
        mono: {
          fontFamily: SpaceMono.regular,
        },
        sans: {
          fontFamily: Nunito.regular,
        },
      },
      weight: {
        bold: {
          fontFamily: Nunito.bold,
        },
        semiBold: {
          fontFamily: Nunito.semibold,
        },
        regular: {
          fontFamily: Nunito.regular,
        },
      },
    },
  },
}));
