import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { InputDescription } from '../Input/InputDescription';
import { Input } from '../Input';

type PasswordProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
};

export function Password<T extends FieldValues>({
  name,
  control,
  onSubmitEditing,
}: PasswordProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { name, value, onBlur, onChange, ref },
        fieldState: { error },
      }) => (
        <Input>
          <Input.Label intent={error ? 'error' : undefined}>
            Password
          </Input.Label>
          <Input.Text
            ref={ref}
            key={name}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry
            value={value}
            onSubmitEditing={onSubmitEditing}
          />
          <InputDescription intent={error ? 'error' : undefined}>
            {error ? error.message : 'Password you used to sign up'}
          </InputDescription>
        </Input>
      )}
    />
  );
}
