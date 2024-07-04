import { LucideIcon } from 'lucide-react-native';
import { useStyles } from 'react-native-unistyles';
import { View } from 'react-native';

import stylesheet from '@features/blocks/Blocks.styles';
import { TextSans } from '@typography/Text';

import { Link } from '../Link';

export type LinkMenuProps = {
  icon: LucideIcon;
  text: string;
  title: string;
};

export function LinkMenu({ icon: Icon, text, title }: LinkMenuProps) {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Link href="/blocks/forms" asChild>
      <Link.Pressable>
        {({ pressed }) => (
          <View style={styles.container(pressed)}>
            <View style={styles.menu}>
              <Icon
                color={
                  pressed
                    ? theme.colors.grayTextContrast
                    : theme.colors.grayTextContrast
                }
              />
              <TextSans style={styles.title(pressed)} face="600SemiBold">
                {title}
              </TextSans>
            </View>
            <TextSans style={styles.text} face="400Regular">
              {text}
            </TextSans>
          </View>
        )}
      </Link.Pressable>
    </Link>
  );
}
