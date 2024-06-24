import { PropsWithChildren } from 'react';
import { useStyles } from 'react-native-unistyles';
import {
  Theme as RNTheme,
  ThemeProvider as RNThemeProvider,
} from '@react-navigation/native';

import { useColorScheme } from '@hooks/useColorScheme';

// This is necessary to initialize the UniStylesRegistry.
import './themes';

/**
 * Compose the base colors for the built-in components.
 */
function useRNTheme(): RNTheme {
  const colorScheme = useColorScheme();
  const { theme } = useStyles();
  return {
    dark: colorScheme === 'dark',
    colors: {
      primary: theme.colors.grayTextContrast, // tabbar active text / icon color
      text: theme.colors.grayText, // tabbar inactive text / icon color
      card: theme.colors.grayBase, // tabbar background
      background: theme.colors.grayBase,
      border: theme.colors.accentBorder, // tabbar top border
      notification: theme.colors.accentSolid,
    },
  };
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const rnTheme = useRNTheme();
  return <RNThemeProvider value={rnTheme}>{children}</RNThemeProvider>;
}
