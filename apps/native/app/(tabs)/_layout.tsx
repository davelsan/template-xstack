import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
  Boxes,
  House,
  LucideBarChartHorizontalBig,
  MonitorSmartphone,
} from 'lucide-react-native';

import ThreeJS from '@assets/icons/threejs.svg';

export default function TabsLayout() {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: Platform.select({
          ios: styles.tabBar_ios,
          android: styles.tabBar_android,
        }),
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
          tabBarIcon: ({ color }) => (
            <House style={styles.icon} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="blocks"
        options={{
          title: 'Blocks',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color }) => (
            <Boxes style={styles.icon} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="feats"
        options={{
          title: 'Features',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color }) => (
            <MonitorSmartphone style={styles.icon} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="charts"
        options={{
          title: 'Charts',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color }) => (
            <LucideBarChartHorizontalBig style={styles.icon} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: 'Three',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color }) => (
            <ThreeJS style={styles.icon} width={22} height={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  icon: {
    marginBottom: -5,
  },
  tabBar_android: {
    height: 80,
    paddingBottom: theme.spacing.md,
  },
  tabBar_ios: {
    height: 90,
  },
  tabBarLabel: {
    fontFamily: theme.fontFace({ family: 'Nunito', face: '400Regular' }),
    fontSize: theme.fontSizes.body3,
    lineHeight: theme.lineHeight(theme.fontSizes.body3),
  },
  themeOverrides: {
    backgroundColor: theme.colors.grayBase,
  },
}));
