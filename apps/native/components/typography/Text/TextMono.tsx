import { Mono } from '@theme/vars/fonts';

import { Text, TextBaseProps } from './Text';

type TextMonoProps = TextBaseProps & {
  face?: Mono['face'];
};

export function TextMono({ face = '400Regular', ...props }: TextMonoProps) {
  return <Text font={{ family: 'SpaceMono', face }} {...props} />;
}
