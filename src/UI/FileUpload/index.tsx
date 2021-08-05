import { memo, useCallback, ChangeEvent } from 'react';

import { FixTypeLater } from 'types';

import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app/app-constants';

export const FileUpload = memo((props: FixTypeLater) => {
  const { onChange, maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES, name } = props;

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        onChange(name, reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [name, onChange]
  );

  return (
    <>
      <input type="file" onChange={handleUpload} />
    </>
  );
});
