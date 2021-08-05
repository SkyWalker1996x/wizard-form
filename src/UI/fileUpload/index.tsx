import React from 'react';

import { FixTypeLater } from 'types';

import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app-constants';

export const FileUpload = ({
  onChange,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}: FixTypeLater) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      onChange(otherProps.name, reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input type="file" onChange={handleUpload} />
    </>
  );
};
