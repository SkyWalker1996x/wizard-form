import { memo, useCallback, ChangeEvent } from 'react';

import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app/app-constants';

import { UploadLabel } from './styles';

interface IFileUploadProps {
  onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  name: string;
  id: string;
  onErrorChange: (field: string, value: string | undefined) => void;
  isEdit: boolean;
}

export const FileUpload = memo((props: IFileUploadProps) => {
  const { onChange, name, id, onErrorChange, isEdit } = props;

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        if (file.size > DEFAULT_MAX_FILE_SIZE_IN_BYTES) {
          onErrorChange(name, 'File size should be less 1 MB');
        } else {
          const image = reader.result;
          onChange(name, image);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [name, onChange, onErrorChange]
  );

  return (
    <>
      <UploadLabel htmlFor={id}>{isEdit ? 'edit avatar' : 'add avatar'}</UploadLabel>
      <input id={id} type="file" onChange={handleUpload} style={{ display: 'none' }} />
    </>
  );
});
