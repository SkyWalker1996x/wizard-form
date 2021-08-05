import { ButtonStyled } from './styles';

import { FixTypeLater } from 'types';

export const Button = (props: FixTypeLater) => {
  const { type = 'button', text = '' } = props;

  return <ButtonStyled type={type}>{text}</ButtonStyled>;
};
