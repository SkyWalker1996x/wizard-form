import { TextInput } from 'UI/textInput';
import { FileUpload } from 'UI/fileUpload';

import { FormWrapper } from './styles';

export const AccountForm = () => {
  return (
    <FormWrapper>
      <TextInput />
      <FileUpload />
    </FormWrapper>
  );
};
