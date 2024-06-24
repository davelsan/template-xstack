import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text, TextProps } from '@ui/Text';

type HeadingProps = TextProps & {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
};

export function Heading({ children, style, type = 'h1' }: HeadingProps) {
  const { styles } = useStyles(stylesheet, {
    type,
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
}

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      type: {
        h1: {
          ...theme.typography.h1,
        },
        h2: {
          ...theme.typography.h2,
        },
        h3: {
          ...theme.typography.h3,
        },
        h4: {
          ...theme.typography.h4,
        },
      },
    },
  },
}));
