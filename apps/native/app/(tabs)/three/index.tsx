import { SafeAreaView } from '@ui/SafeAreaView/SafeAreaView';
import { Text } from '@typography/Text';

export default function ThreePage() {
  return (
    <SafeAreaView edges={['top', 'right', 'left']}>
      <Text>Three</Text>
    </SafeAreaView>
  );
}
