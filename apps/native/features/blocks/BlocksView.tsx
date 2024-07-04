import { ClipboardPen } from 'lucide-react-native';

import { HeroView } from '@ui/HeroView';
import { LinkMenu } from '@ui/LinkMenu';

export function BlocksView() {
  return (
    <HeroView title="Blocks" subtitle="App building blocks and components">
      <LinkMenu icon={ClipboardPen} text="Forms" />
    </HeroView>
  );
}
