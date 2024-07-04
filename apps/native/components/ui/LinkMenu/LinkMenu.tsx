import { LucideIcon } from 'lucide-react-native';
import { useStyles } from 'react-native-unistyles';
import { View } from 'react-native';

import stylesheet from '@features/blocks/Blocks.styles';
import { TextSans } from '@typography/Text';

import { Link } from '../Link';

export type LinkMenuProps = {
  icon: LucideIcon;
  text: string;
};

export function LinkMenu({ icon: Icon, text }: LinkMenuProps) {
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
