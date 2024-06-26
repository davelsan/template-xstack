import { Image, Platform } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Heading } from '@typography/Heading/Heading';
import { TextSans } from '@typography/TextSans';
import { ParallaxScrollView } from '@ui/ParallaxScrollView';
import { ThemedView } from '@ui/ThemedView';

import { HelloWave } from './HelloWave';

import styleSheet from './Home.css';

export function HomeView() {
  const { styles } = useStyles(styleSheet);

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
        <TextSans>
          Edit <TextSans face="700Bold">app/(tabs)/index.tsx</TextSans> to see
          changes. Press{' '}
          <TextSans face="700Bold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </TextSans>{' '}
          to open developer tools.
        </TextSans>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading type="h3">Step 2: Explore</Heading>
        <TextSans>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </TextSans>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Heading type="h3">Step 3: Get a fresh start</Heading>
        <TextSans>
          When you're ready, run{' '}
          <TextSans face="700Bold">npm run reset-project</TextSans> to get a
          fresh <TextSans face="700Bold">app</TextSans> directory. This will
          move the current <TextSans face="700Bold">app</TextSans> to{' '}
          <TextSans face="700Bold">app-example</TextSans>.
        </TextSans>
      </ThemedView>
    </ParallaxScrollView>
  );
}
