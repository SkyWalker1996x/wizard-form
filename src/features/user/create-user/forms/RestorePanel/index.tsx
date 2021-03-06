import { FlexWrapper } from 'UI/FlexWrapper';
import { Text } from 'UI/Text';
import { RestorePanelWrapper, CloseWrapper } from './styles';

import closeMark from 'assets/close-mark.svg';

interface IRestorePanelProps {
  handleLoadFormData: () => void;
  handleRemoveFormData: () => void;
}

export const RestorePanel = (props: IRestorePanelProps) => {
  const { handleLoadFormData, handleRemoveFormData } = props;

  return (
    <RestorePanelWrapper>
      <FlexWrapper columnGap="11px">
        <Text
          text="You have an unsaved user data. Do you want to complete it?"
          fontSize="14px"
          fontWeight="500"
          color="white"
        />

        <Text
          text="Continue"
          fontSize="14px"
          fontWeight="900"
          color="white"
          onClick={handleLoadFormData}
          cursor="pointer"
        />
      </FlexWrapper>

      <CloseWrapper onClick={handleRemoveFormData}>
        <img src={closeMark} alt="close" />
      </CloseWrapper>
    </RestorePanelWrapper>
  );
};
