import { LucideFingerprint } from 'lucide-react-native';

import { LinkMenu } from '@ui/LinkMenu';
import { HeroView } from '@ui/HeroView';

export function FeatsView() {
  return (
    <HeroView title="Features" subtitle="Recurrent screens and forms">
      <LinkMenu
        href="/feats/auth"
        icon={LucideFingerprint}
        title="Authentication"
        text="Forms to sign-up and sign-in a user"
      />
    </HeroView>
  );
}
