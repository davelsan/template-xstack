import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import { useEffect } from 'react';

import { Email } from '@forms/Email/Email';
import { Button } from '@ui/Button/Button';
import { Password } from '@forms/Password/Password';

import stylesheet from './Auth.styles';

const schema = z.object({
  email: z.preprocess(
    (val) => String(val).trim(),
    z
      .string({ required_error: 'An email is required' })
      .email({ message: 'A valid email is required' })
  ),
  password: z.string({ required_error: 'A password is required' }).min(1, {
    message: 'A password is required',
  }),
});

type FormData = z.infer<typeof schema>;

export function AuthView() {
  const { styles } = useStyles(stylesheet);

  const { control, handleSubmit, formState, setFocus } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => setFocus('email'), [setFocus]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={styles.view}>
      <View style={styles.controls}>
        <Email name="email" control={control} />
        <Password
          name="password"
          control={control}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
      </View>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </KeyboardAvoidingView>
  );
}
