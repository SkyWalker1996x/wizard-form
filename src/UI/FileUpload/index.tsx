import { memo, useCallback, ChangeEvent, useState, useRef, MouseEvent } from 'react';

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

  const onCrop = useCallback(() => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const cropperImage = cropper.getCroppedCanvas().toDataURL();

    setCropperImage(cropperImage);
  }, [cropperRef, setCropperImage]);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const handleConfirm = useCallback(() => {
    onChange(name, cropperImage);
    handleCloseModal();
  }, [onChange, handleCloseModal, cropperImage, name]);

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
          // @ts-ignore
          setImage(image);
          handleOpenModal();
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [name, onErrorChange, handleOpenModal, setImage]
  );

  const handleInputClick = useCallback((event: MouseEvent) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  }, []);

  return (
    <>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        label={'Image Cropping'}
      >
        <Cropper
          src={image}
          style={{ height: 'auto', width: '100%' }}
          initialAspectRatio={16 / 16}
          guides={false}
          crop={debounce(onCrop, 300)}
          ref={cropperRef}
        />
      </Modal>
      <UploadLabel htmlFor={id}>{isEdit ? 'edit avatar' : 'add avatar'}</UploadLabel>
      <input
        id={id}
        type="file"
        onChange={handleUpload}
        style={{ display: 'none' }}
        onClick={handleInputClick}
      />
    </>
  );
});
