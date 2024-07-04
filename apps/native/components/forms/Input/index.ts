import { withStaticProps } from '@utils/components';

import { InputContainer } from './InputContainer';
import { InputText } from './InputText';
import { InputLabel } from './InputLabel';
import { InputDescription } from './InputDescription';

export const Input = withStaticProps(InputContainer, {
  Description: InputDescription,
  Label: InputLabel,
  Text: InputText,
});
