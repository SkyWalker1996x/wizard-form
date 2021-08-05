import { FileUpload } from 'UI/fileUpload';

import { ImageUploadWrapper, ImageWrapper } from './styles';

import personMark from 'assets/person-mark.svg';

import { FixTypeLater } from 'types';

export const ImageUpload = (props: FixTypeLater) => {
  return (
    <ImageUploadWrapper>
      <ImageWrapper>
        <img src={personMark} alt="avatar" />
      </ImageWrapper>

      <FileUpload {...props} />
    </ImageUploadWrapper>
  );
};
