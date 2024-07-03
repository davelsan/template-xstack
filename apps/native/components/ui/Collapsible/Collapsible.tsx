import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TextSans } from '@typography/TextSans';

import { ThemedView } from '../ThemedView';

import styleSheet from './Collapsible.styles';

type CollapsibleProps = {
  title: string;
};

export function Collapsible({
  children,
  title,
}: PropsWithChildren<CollapsibleProps>) {
  const { styles } = useStyles(styleSheet);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          style={styles.icon}
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
        />
        <TextSans face="700Bold">{title}</TextSans>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}
