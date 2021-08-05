import { memo } from 'react';

import { FileUpload } from 'UI/FileUpload';

import { ImageUploadWrapper, ImageWrapper } from './styles';

import personMark from 'assets/person-mark.svg';

import { FixTypeLater } from 'types';

export const ImageUpload = memo((props: FixTypeLater) => {
  return (
    <ImageUploadWrapper>
      <ImageWrapper>
        <img src={personMark} alt="avatar" />
      </ImageWrapper>

      <FileUpload {...props} />
    </ImageUploadWrapper>
  );
});
