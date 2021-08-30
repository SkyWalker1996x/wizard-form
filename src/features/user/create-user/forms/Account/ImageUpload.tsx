import { memo } from 'react';
import { FormikErrors } from 'formik';

import { FileUpload } from 'UI/FileUpload';
import { ValidationError } from 'UI/ValidationError';

import { ImageUploadWrapper, ImageWrapper } from './styles';

import personMark from 'assets/person-mark.svg';

interface IImageUploadProps {
  id: string;
  name: string;
  onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
  value: string | undefined;
  onErrorChange: (field: string, value: string | undefined) => void;
}

export const ImageUpload = memo((props: IImageUploadProps) => {
  const { error, value, ...otherProps } = props;

  return (
    <ImageUploadWrapper>
      <ImageWrapper>
        <img src={value || personMark} alt="avatar" />
      </ImageWrapper>

      <FileUpload {...otherProps} isEdit={!!value} />

      {error && <ValidationError error={error} />}
    </ImageUploadWrapper>
  );
});
