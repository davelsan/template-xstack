import { Stack } from 'expo-router';

export default function BlocksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="forms" options={{ headerShown: false }} />
    </Stack>
  );
}
