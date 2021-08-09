import { memo } from 'react';

import { FileUpload } from 'UI/FileUpload';

import { ImageUploadWrapper, ImageWrapper } from './styles';

import personMark from 'assets/person-mark.svg';

import { FixTypeLater } from 'types';
import { ValidationError } from 'UI/ValidationError';

export const ImageUpload = memo((props: FixTypeLater) => {
  const { error, ...otherProps } = props;

  return (
    <ImageUploadWrapper>
      <ImageWrapper>
        <img src={personMark} alt="avatar" />
      </ImageWrapper>

      <FileUpload {...otherProps} />

      {error && <ValidationError error={error} />}
    </ImageUploadWrapper>
  );
});
