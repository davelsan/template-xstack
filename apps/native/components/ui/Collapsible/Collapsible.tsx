import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text } from '../Text';
import { ThemedView } from '../ThemedView';

type CollapsibleProps = {
  title: string;
};

export function Collapsible({
  children,
  title,
}: PropsWithChildren<CollapsibleProps>) {
  const { styles } = useStyles(stylesheet);

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
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  content: {
    marginTop: theme.spacing.xs,
    marginLeft: theme.spacing.xl,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  icon: {
    color: theme.colors.graySolid,
  },
  text: {
    fontFamily: theme.fonts.Nunito.bold,
  },
}));
