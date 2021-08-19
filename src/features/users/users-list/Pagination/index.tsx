import { FlexWrapper } from 'UI/FlexWrapper';
import { Button } from 'UI/Button/Button';

interface IPaginationProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const Pagination = (props: IPaginationProps) => {
  const { onNextPage, onPrevPage } = props;

  return (
    <FlexWrapper columnGap={'15px'}>
      <Button onClick={() => onPrevPage()} text="prev" />
      <Button onClick={() => onNextPage()} text="next" />
    </FlexWrapper>
  );
};
