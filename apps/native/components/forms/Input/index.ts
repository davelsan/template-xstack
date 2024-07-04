import { withStaticProps } from '@utils/components';

import { InputContainer } from './InputContainer';
import { InputText } from './InputText';
import { InputLabel } from './InputLabel';

export const Input = withStaticProps(InputContainer, {
  Label: InputLabel,
  Text: InputText,
});
