import { TextInput, TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { forwardRef, useState } from 'react';

import stylesheet, { InputTextVariants } from './InputText.styles';

export type InputTextProps = TextInputProps & InputTextVariants;

export const InputText = forwardRef<TextInput, InputTextProps>(
  function InputTextRef({ onBlur, onFocus, state, style, ...props }, ref) {
    const [focused, setFocused] = useState(false);
    const { styles } = useStyles(stylesheet, {
      state,
    });

    return (
      <TextInput
        ref={ref}
        style={[styles.input(focused), style]}
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
