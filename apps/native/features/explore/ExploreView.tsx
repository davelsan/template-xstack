import { Image, Platform } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Heading } from '@typography/Heading/Heading';
import { Text } from '@typography/Text';
import { TextMono } from '@typography/TextMono';
import { TextSans } from '@typography/TextSans';
import { Collapsible } from '@ui/Collapsible';
import { Link } from '@ui/Link';
import { ParallaxScrollView } from '@ui/ParallaxScrollView';
import { ThemedView } from '@ui/ThemedView';

import styleSheet from './Explore.css';

export function ExploreView() {
  const { styles } = useStyles(styleSheet);
  return (
    <ParallaxScrollView
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Heading type="h2">Explore</Heading>
      </ThemedView>

      <TextSans>
        This app includes example code to help you get started.
      </TextSans>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens:{' '}
          <TextSans face="700Bold">app/(tabs)/index.tsx</TextSans> and{' '}
          <TextSans face="700Bold">app/(tabs)/explore.tsx</TextSans>
        </Text>
        <Text>
          The layout file in
          <TextSans face="700Bold">app/(tabs)/_layout.tsx</TextSans> sets up the
          tab navigator.
        </Text>
        <Link href="https://docs.expo.dev/router/introduction">Learn more</Link>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <TextSans face="700Bold">W</TextSans> in the
          terminal running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <TextSans>
          For static images, you can use the
          <TextSans face="700Bold">@2x</TextSans> and{' '}
          <TextSans face="700Bold">@3x</TextSans> suffixes to provide files for
          different screen densities
        </TextSans>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ alignSelf: 'center' }}
        />
        <Link href="https://reactnative.dev/docs/images">Learn more</Link>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Text>
          Open <TextSans face="700Bold">app/_layout.tsx</TextSans> to see how to
          load <TextMono>custom fonts such as this one.</TextMono>
        </Text>
        <Link href="https://docs.expo.dev/versions/latest/sdk/font">
          Learn more
        </Link>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <TextSans>
          This template has light and dark mode support. The{' '}
          <TextSans face="700Bold">useColorScheme()</TextSans> hook lets you
          inspect what the user's current color scheme is, and so you can adjust
          UI colors accordingly.
        </TextSans>
        <Link href="https://docs.expo.dev/develop/user-interface/color-themes/">
          Learn more
        </Link>
      </Collapsible>
      <Collapsible title="Animations">
        <TextSans>
          This template includes an example of an animated component. The{' '}
          <TextSans face="700Bold">components/HelloWave.tsx</TextSans> component
          uses the powerful
          <TextSans face="700Bold">react-native-reanimated</TextSans> library to
          create a waving hand animation.
        </TextSans>
        {Platform.select({
          ios: (
            <TextSans>
              The
              <TextSans face="700Bold">
                components/ParallaxScrollView.tsx
              </TextSans>{' '}
              component provides a parallax effect for the header image.
            </TextSans>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}
