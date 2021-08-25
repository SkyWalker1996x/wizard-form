import { memo, useCallback, ChangeEvent, useState, useRef } from 'react';

import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app/app-constants';
import { debounce } from 'utils/debounce';

import { Modal } from 'UI/Modal';
import Cropper from 'react-cropper';

import { UploadLabel } from './styles';
import 'cropperjs/dist/cropper.css';

interface IFileUploadProps {
  onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  name: string;
  id: string;
  onErrorChange: (field: string, value: string | undefined) => void;
  isEdit: boolean;
}

export const FileUpload = memo((props: IFileUploadProps) => {
  const { onChange, name, id, onErrorChange, isEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [cropperImage, setCropperImage] = useState<string | undefined>(undefined);
  const cropperRef = useRef<HTMLImageElement>(null);

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const cropperImage = cropper.getCroppedCanvas().toDataURL();

    setCropperImage(cropperImage);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    if (cropperImage) {
      onChange(name, cropperImage);
      handleCloseModal();
    }
  };

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log('e.target', e.target.files);
      if (!e.target.files) return;

      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        if (file.size > DEFAULT_MAX_FILE_SIZE_IN_BYTES) {
          onErrorChange(name, 'File size should be less 1 MB');
        } else {
          const image = reader.result;
          // @ts-ignore
          setImage(image);
          handleOpenModal();
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [name, onErrorChange, setImage]
  );

  return (
    <>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
      >
        <Cropper
          src={image}
          style={{ height: 400, width: '100%' }}
          initialAspectRatio={16 / 9}
          guides={false}
          crop={debounce(onCrop, 300)}
          ref={cropperRef}
        />
      </Modal>
      <UploadLabel htmlFor={id}>{isEdit ? 'edit avatar' : 'add avatar'}</UploadLabel>
      <input id={id} type="file" onChange={handleUpload} style={{ display: 'none' }} />
    </>
  );
});
