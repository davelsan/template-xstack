import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Heading } from '@typography/Heading';
import { ThemedView } from '@ui/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Heading type="h2">This screen doesn't exist.</Heading>
        <Link href="/" style={styles.link}>
          Go to home screen!
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
