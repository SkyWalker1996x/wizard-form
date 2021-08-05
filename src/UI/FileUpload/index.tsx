import { memo, useCallback, ChangeEvent } from 'react';

import { FixTypeLater } from 'types';

export const FileUpload = memo((props: FixTypeLater) => {
  const { onChange, name } = props;

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

  return <input type="file" onChange={handleUpload} />;
});
