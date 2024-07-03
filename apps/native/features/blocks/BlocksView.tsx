import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { ClipboardPen, LucideIcon } from 'lucide-react-native';

import { TextSans } from '@typography/TextSans';
import { Link } from '@ui/Link';
import { HeroView } from '@ui/HeroView';

import stylesheet from './Blocks.styles';

export function BlocksView() {
  return (
    <HeroView title="Blocks" subtitle="App building blocks and components">
      <MenuButton icon={ClipboardPen} text="Forms" />
    </HeroView>
  );
}

type MenuButtonProps = {
  icon: LucideIcon;
  text: string;
};

function MenuButton({ icon: Icon, text }: MenuButtonProps) {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Link href="/blocks/forms" asChild>
      <Link.Pressable>
        {({ pressed }) => (
          <View style={styles.menu(pressed)}>
            <Icon
              color={
                pressed
                  ? theme.colors.grayTextContrast
                  : theme.colors.grayTextContrast
              }
            />
            <TextSans style={styles.text} face="600SemiBold">
              {text}
            </TextSans>
          </View>
        )}
      </Link.Pressable>
    </Link>
  );
}
