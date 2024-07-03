import { ScrollView, View } from 'react-native';
import { Image } from 'expo-image';
import { useStyles } from 'react-native-unistyles';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { PropsWithChildren } from 'react';

import { Heading } from '@typography/Heading';
import { Text } from '@typography/Text';

import stylesheet from './HeroView.styles';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type HeroViewProps = {
  title: string;
  subtitle: string;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedText = Animated.createAnimatedComponent(Text);

export function HeroView({
  children,
  subtitle,
  title,
}: PropsWithChildren<HeroViewProps>) {
  const { styles } = useStyles(stylesheet);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollOffset.value,
      [0, 500],
      [200, 120],
      Extrapolation.CLAMP
    ),
  }));

  const subtitleStyle = useAnimatedStyle(() => {
    const value = interpolate(
      scrollOffset.value,
      [0, 300],
      [1, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: value,
      height: value > 0 ? 'auto' : 0,
    };
  });

  return (
    <>
      {/*HEADER*/}
      <Animated.View style={styles.card}>
        {/*HEADER IMAGE*/}
        <AnimatedImage
          style={[styles.image, imageStyle]}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />

        {/*HEADER CONTENT*/}
        <View style={styles.textContainer}>
          <Heading style={styles.textTitle} type="h2">
            {title}
          </Heading>
          <AnimatedText style={[styles.textSubtitle, subtitleStyle]}>
            {subtitle}
          </AnimatedText>
        </View>
      </Animated.View>

      {/*VIEW CONTENT*/}
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollView}
      >
        {children}
      </ScrollView>
    </>
  );
}
