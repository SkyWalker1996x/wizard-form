import { memo, MouseEvent } from 'react';

import { ButtonStyled } from './styles';

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  background?: string | undefined;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  width?: string;
  disabled?: boolean;
}

export const Button = memo((props: IButtonProps) => {
  const { text } = props;

  return <ButtonStyled {...props}>{text}</ButtonStyled>;
});
