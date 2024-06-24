import { forwardRef } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

type LinkPressableProps = PressableProps;

/**
 * Thin wrapper function around `Pressable` to have a more declarative interface
 * to render a custom styled component within the Expo Router `Link`.
 *
 * @example
 * <Link href="/path/to/file" asChild>
 *   <Link.Pressable>
 *     {({ hovered, pressed }) => (
 *       <CardComponent />
 *     )}
 *   </Link.Pressable>
 * </Link>
 */
export const LinkPressable = forwardRef<View, LinkPressableProps>(
  function LinkPressable({ children, ...props }, ref) {
    return (
      <Pressable ref={ref} {...props}>
        {(state) =>
          typeof children === 'function' ? children(state) : children
        }
      </Pressable>
    );
  }
);
