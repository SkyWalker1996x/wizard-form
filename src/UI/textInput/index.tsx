import { TextInputWrapper } from './styles';

export const TextInput = () => {
  return (
    <TextInputWrapper>
      <label>
          <span>Label</span>
          <span>*</span>
      </label>
      <input type="text" />
    </TextInputWrapper>
  );
};
