import { TextInput, TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { forwardRef, useState } from 'react';

import stylesheet from './InputText.styles';

export type InputTextProps = TextInputProps;

export const InputText = forwardRef<TextInput, InputTextProps>(
  function InputTextRef({ onBlur, onFocus, style, ...props }, ref) {
    const [focused, setFocused] = useState(false);
    const { styles } = useStyles(stylesheet, {
      state: focused ? 'focused' : undefined,
    });

    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        autoCapitalize="none"
        numberOfLines={1}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        {...props}
      />
    );
  }
);
