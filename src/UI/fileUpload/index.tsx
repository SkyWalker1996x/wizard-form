import { useState, useRef } from 'react';

import { FixTypeLater } from 'types';

import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app-constants';

export const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}: FixTypeLater) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState({});

  const handleUpload = () => {
    if (fileInputRef !== null) {
      fileInputRef?.current?.click();
    }
  };

  return (
    <>
      <input type="file" ref={fileInputRef} title="" value="" />
    </>
  );
};
