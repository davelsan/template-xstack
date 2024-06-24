import { Image, Platform, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Heading } from '@typography/Heading';
import { Collapsible } from '@ui/Collapsible';
import { Link } from '@ui/Link';
import { ParallaxScrollView } from '@ui/ParallaxScrollView';
import { Text } from '@ui/Text';
import { ThemedView } from '@ui/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Heading type="h2">Explore</Heading>
      </ThemedView>

      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens:{' '}
          <Text weight="bold">app/(tabs)/index.tsx</Text> and{' '}
          <Text weight="bold">app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in <Text weight="bold">app/(tabs)/_layout.tsx</Text>{' '}
          sets up the tab navigator.
        </Text>
        <Link href="https://docs.expo.dev/router/introduction">Learn more</Link>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text weight="bold">W</Text> in the terminal
          running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the <Text weight="bold">@2x</Text> and{' '}
          <Text weight="bold">@3x</Text> suffixes to provide files for different
          screen densities
        </Text>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ alignSelf: 'center' }}
        />
        <Link href="https://reactnative.dev/docs/images">Learn more</Link>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Text>
          Open <Text weight="bold">app/_layout.tsx</Text> to see how to load{' '}
          <Text style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </Text>
        </Text>
        <Link href="https://docs.expo.dev/versions/latest/sdk/font">
          Learn more
        </Link>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{' '}
          <Text weight="bold">useColorScheme()</Text> hook lets you inspect what
          the user's current color scheme is, and so you can adjust UI colors
          accordingly.
        </Text>
        <Link href="https://docs.expo.dev/develop/user-interface/color-themes/">
          Learn more
        </Link>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{' '}
          <Text weight="bold">components/HelloWave.tsx</Text> component uses the
          powerful <Text weight="bold">react-native-reanimated</Text> library to
          create a waving hand animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The <Text weight="bold">components/ParallaxScrollView.tsx</Text>{' '}
              component provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
