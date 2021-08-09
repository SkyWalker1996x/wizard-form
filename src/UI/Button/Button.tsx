import { memo } from 'react';

import { ButtonStyled } from './styles';

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
}

export const Button = memo((props: IButtonProps) => {
  const { type, text } = props;

  return <ButtonStyled type={type || 'button'}>{text}</ButtonStyled>;
});
