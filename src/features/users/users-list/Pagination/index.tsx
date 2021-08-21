import { FlexWrapper } from 'UI/FlexWrapper';
import { Button } from 'UI/Button/Button';
import { Text } from 'UI/Text';

interface IPaginationProps {
  onNextPage: () => void;
  onPrevPage: () => void;
  onDefinitePage: (page: number) => void;
  total: number;
  perPage: number;
  page: number;
}

export const Pagination = (props: IPaginationProps) => {
  const { onNextPage, onPrevPage, onDefinitePage, total, perPage, page } = props;
  const totalPages = Math.ceil(total / perPage);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  const numberPages = Array.from({ length: totalPages }, (v, k) => k + 1);

  const renderNumberPages = numberPages.map(number => {
    if (number < page + 3 && number > page - 3) {
      return (
        <Button
          key={number}
          disabled={number === page}
          text={number.toString()}
          onClick={() => onDefinitePage(number)}
          background={number === page ? 'main' : 'blue300'}
          width={'75px'}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <FlexWrapper columnGap={'15px'} justifyContent={'space-between'} width={'75%'}>
      <Button
        onClick={() => onPrevPage()}
        text="prev"
        disabled={!hasPrevPage}
        background={!hasPrevPage ? 'gray100' : 'main'}
      />
      {page - 3 > 0 && <Text fontSize="24px" text="..." color={'gray100'} />}
      <FlexWrapper columnGap={'3px'} width={'auto'}>
        {renderNumberPages}
      </FlexWrapper>
      {page + 3 <= totalPages && <Text fontSize="24px" text="..." color={'gray100'} />}
      <Button
        onClick={() => onNextPage()}
        text="next"
        disabled={!hasNextPage}
        background={!hasNextPage ? 'gray100' : 'main'}
      />
    </FlexWrapper>
  );
};
