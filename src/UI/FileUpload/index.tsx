import { memo, useCallback, ChangeEvent } from 'react';
import { FormikErrors } from 'formik';

import { UploadLabel } from './styles';

interface IFileUploadProps {
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>;
  name: string;
  id: string;
}

export const FileUpload = memo((props: IFileUploadProps) => {
  const { onChange, name, id } = props;

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        onChange(name, file);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [name, onChange]
  );

  return (
    <>
      <UploadLabel htmlFor={id}>add avatar</UploadLabel>
      <input id={id} type="file" onChange={handleUpload} style={{ display: 'none' }} />
    </>
  );
});
