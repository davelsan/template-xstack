import { forwardRef, PropsWithChildren } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Text } from '@typography/Text';

import stylesheet from './Button.styles';

type ButtonProps = PressableProps;

export const Button = forwardRef<View, PropsWithChildren<ButtonProps>>(
  function ButtonRef({ children, style, ...props }, ref) {
    const { styles } = useStyles(stylesheet);

    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          styles.button(pressed),
          typeof style === 'function' ? style({ pressed }) : style,
        ]}
        {...props}
        accessible
        accessibilityRole="button"
        accessibilityState={{ disabled: Boolean(props.disabled) }}
        focusable
      >
        {({ pressed }) => (
          <Text
            style={styles.text}
            font={{ family: 'Nunito', face: '700Bold' }}
          >
            {children}
          </Text>
        )}
      </Pressable>
    );
  }
);
