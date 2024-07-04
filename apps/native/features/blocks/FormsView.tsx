import { useStyles } from 'react-native-unistyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { SafeAreaView } from '@ui/SafeAreaView';
import { Input } from '@ui/Input';

import stylesheet from './Forms.styles';

export function FormsView() {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView edges={['top']}>
      <KeyboardAwareScrollView contentContainerStyle={[styles.view]}>
        <Input>
          <Input.Label>Some Label</Input.Label>
          <Input.Text placeholder="Some value" />
        </Input>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
