import { Image, Platform, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

import { Heading } from '@typography/Heading';
import { ParallaxScrollView } from '@ui/ParallaxScrollView';
import { Text } from '@ui/Text';
import { ThemedView } from '@ui/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Heading type="h2">Welcome!</Heading>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading type="h3">Step 1: Try it</Heading>
        <Text>
          Edit <Text weight="bold">app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text weight="bold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading type="h3">Step 2: Explore</Heading>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading type="h3">Step 3: Get a fresh start</Heading>
        <Text>
          When you're ready, run{' '}
          <Text weight="bold">npm run reset-project</Text> to get a fresh{' '}
          <Text weight="bold">app</Text> directory. This will move the current{' '}
          <Text weight="bold">app</Text> to{' '}
          <Text weight="bold">app-example</Text>.
        </Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
