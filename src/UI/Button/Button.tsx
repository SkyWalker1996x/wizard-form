import { memo } from 'react';

import { ButtonStyled } from './styles';

import { FixTypeLater } from 'types';

export const Button = memo((props: FixTypeLater) => {
  const { type = 'button', text = '' } = props;

  return <ButtonStyled type={type}>{text}</ButtonStyled>;
});
