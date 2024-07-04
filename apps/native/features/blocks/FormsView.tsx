import { useStyles } from 'react-native-unistyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { SafeAreaView } from '@ui/SafeAreaView';
import { Input } from '@forms/Input';

import stylesheet from './Forms.styles';

export function FormsView() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView edges={['top']}>
      <KeyboardAwareScrollView contentContainerStyle={[styles.view]}>
        <Input>
          <Input.Label>Text Input</Input.Label>
          <Input.Text placeholder="Placeholder text" />
          <Input.Description>This is a text input</Input.Description>
        </Input>

        <Input>
          <Input.Label state="error">Text Input with Error</Input.Label>
          <Input.Text state="error" placeholder="Placeholder text" />
          <Input.Description state="error">
            The error message goes here
          </Input.Description>
        </Input>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
