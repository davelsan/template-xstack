import { SafeAreaView } from '@ui/SafeAreaView/SafeAreaView';
import { AuthView } from '@features/feats/AuthView';

export default function FeaturesPage() {
  return (
    <SafeAreaView edges={['top']}>
      <AuthView />
    </SafeAreaView>
  );
}
