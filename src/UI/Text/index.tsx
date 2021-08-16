import { TextWrapper } from './styles';

interface ITextProps {
  text: string;
  onClick?: () => void;
  textAlign?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  cursor?: string;
}

export const Text = (props: ITextProps) => {
  const { text } = props;

  return <TextWrapper {...props}>{text}</TextWrapper>;
};
