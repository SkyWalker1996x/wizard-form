import { memo, MouseEvent } from 'react';

import { ButtonStyled } from './styles';

interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  background?: string | undefined;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const Button = memo((props: IButtonProps) => {
  const { type = 'button', text, background, onClick = () => {} } = props;

  return (
    <ButtonStyled type={type} background={background} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
});
