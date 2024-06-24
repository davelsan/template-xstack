import { Tabs } from 'expo-router';
import React, { type ComponentProps } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import type { IconProps } from '@expo/vector-icons/build/createIconSet';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const { styles, theme } = useStyles(stylesheet);
  const os = Platform.OS === 'ios' ? 'ios' : 'android';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles[`tabBar_${os}`],
        tabBarActiveTintColor: theme.colors.accentSolid,
        tabBarInactiveTintColor: theme.colors.grayText,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: styles.tabBarLabel,
          header: TabHeader,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarLabelStyle: styles.tabBarLabel,
          header: TabHeader,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

function TabHeader() {
  return <SafeAreaView edges={['top', 'right', 'left']} />;
}

function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

const stylesheet = createStyleSheet((theme) => ({
  tabBar_android: {
    height: 80,
    paddingBottom: theme.spacing.md,
  },
  tabBar_ios: {
    height: 90,
  },
  tabBarLabel: {
    ...theme.typography.caption,
  },
  themeOverrides: {
    backgroundColor: theme.colors.grayBase,
  },
}));
