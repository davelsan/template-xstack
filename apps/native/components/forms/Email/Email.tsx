import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { InputDescription } from '@ui/Input/InputDescription';
import { Input } from '@ui/Input';

type EmailProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export function Email<T extends FieldValues>({ name, control }: EmailProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { name, value, onBlur, onChange, ref },
        fieldState: { error },
      }) => (
        <Input>
          <Input.Label intent={error ? 'error' : undefined}>Email</Input.Label>
          <Input.Text
            ref={ref}
            key={name}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          <InputDescription intent={error ? 'error' : undefined}>
            {error ? error.message : 'Email address you used to sign up'}
          </InputDescription>
        </Input>
      )}
    />
  );
}
