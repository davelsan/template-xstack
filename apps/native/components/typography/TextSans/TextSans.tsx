import { Sans } from '@theme/vars/fonts';

import { Text, TextBaseProps } from '../Text';

type TextSansProps = TextBaseProps & {
  face?: Sans['face'];
};

export function TextSans({ face = '400Regular', ...props }: TextSansProps) {
  return <Text font={{ family: 'Nunito', face }} {...props} />;
}
