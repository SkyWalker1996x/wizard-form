import { Text } from 'UI/Text';
import { FlexWrapper } from 'UI/FlexWrapper';
import { Button } from 'UI/Button/Button';

import { ModalWrapper, ModalBG } from './styles';

interface IModalProps {
  show: boolean;
  children: JSX.Element;
  handleClose: () => void;
  handleConfirm: () => void;
  label?: string;
}

export const Modal = (props: IModalProps) => {
  const { show, handleClose, handleConfirm, label, children } = props;

  if (!show) {
    return null;
  }

  return (
    <ModalBG>
      <ModalWrapper className="modal-container" flexDirection={'column'} rowGap="25px">
        <FlexWrapper justifyContent={'center'}>
          <Text
            text={label || 'Modal window'}
            fontSize="24px"
            fontWeight="700"
            color="gray300"
          />
        </FlexWrapper>

        {children}

        <FlexWrapper justifyContent={'flex-end'} columnGap="25px">
          <Button
            onClick={handleClose}
            text={'close'}
            background={'gray200'}
            type="button"
          />
          <Button onClick={handleConfirm} text={'ok'} type="button" />
        </FlexWrapper>
      </ModalWrapper>
    </ModalBG>
  );
};
