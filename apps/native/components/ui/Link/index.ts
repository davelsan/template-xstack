import { withStaticProps } from '@utils/components';

import { Link as CustomLink } from './Link';
import { LinkPressable } from './LinkPressable';

export const Link = withStaticProps(CustomLink, {
  Pressable: LinkPressable,
});
