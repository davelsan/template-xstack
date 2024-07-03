import { Link as ExpoLink } from 'expo-router';
import { ExpoRouter } from 'expo-router/types/expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { Platform } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Text } from '@typography/Text';

import styleSheet from './Link.styles';

type ExpoLinkProps<T = string> = ExpoRouter.LinkProps<T>;
type Href = ExpoLinkProps['href'];
type ExternalLinkHrefAttrs = Pick<ExpoLinkProps, 'rel' | 'target' | 'onPress'>;

function externalLinkProps(
  href: Href,
  onPress?: ExpoLinkProps['onPress']
): ExternalLinkHrefAttrs {
  const path = typeof href === 'string' ? href : href.pathname;
  const isExternalUrl = path.split(':')[0].startsWith('http');

  return isExternalUrl
    ? {
        /**
         * Protect user privacy.
         * - `noopener`: navigate to the target resource without granting the new
         *    browsing context access to the document that opened it.
         *    https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener
         * - `noreferrer`: omit the Referer header, essentially masking referral links
         *    (i.e., appear as direct traffic).
         *    https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noreferrer
         */
        rel: 'noopener noreferrer',
        /**
         * Open the link in a new tab.
         */
        target: '_blank',
        /**
         * Open the link in an in-app browser on native.
         */
        onPress: async (e) => {
          if (Platform.OS !== 'web') {
            // Prevent the default behavior of linking to the default browser on native.
            e.preventDefault();
            // Execute custom behavior.
            onPress?.(e);
            // Open the link in an in-app browser.
            await openBrowserAsync(href as string);
          }
        },
      }
    : {};
}

export function Link<T>({
  children,
  href,
  onPress,
  ...props
}: ExpoLinkProps<T>) {
  const { styles } = useStyles(styleSheet);
  const textChildren = typeof children === 'string';
  return (
    <ExpoLink
      href={href}
      asChild={textChildren}
      {...externalLinkProps(href, onPress)}
      {...props}
    >
      {textChildren ? <Text style={styles.link}>{children}</Text> : children}
    </ExpoLink>
  );
}
