import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from '../Input';

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
          <Input.Label state={error && 'error'}>Email</Input.Label>
          <Input.Text
            ref={ref}
            key={name}
            onChangeText={onChange}
            onBlur={onBlur}
            state={error && 'error'}
            value={value}
          />
          <Input.Description state={error && 'error'}>
            {error?.message ?? 'Email address you used to sign up'}
          </Input.Description>
        </Input>
      )}
    />
  );
}
