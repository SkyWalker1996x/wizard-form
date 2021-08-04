import { useFormik } from 'formik';

import { TextInput } from 'UI/textInput';

import { FormWrapper } from './styles';

export const AccountForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      resetPassword: '',
    },
    onSubmit: values => {
      console.log('values', values);
    },
  });

  return (
    <FormWrapper>

      <form onSubmit={formik.handleSubmit}>
        <TextInput
            id="userName"
            name="userName"
            type="text"
            label="User name"
            onChange={formik.handleChange}
            value={formik.values.userName}
        />
      </form>
    </FormWrapper>
  );
};
