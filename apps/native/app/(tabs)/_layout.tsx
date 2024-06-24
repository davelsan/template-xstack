import { Tabs } from 'expo-router';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import '@theme/index';

export default function TabLayout() {
  const { theme } = useStyles();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accentSolid,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
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
