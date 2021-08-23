import { useMemo } from 'react';

import { FlexWrapper } from 'UI/FlexWrapper';
import { Button } from 'UI/Button/Button';
import { Text } from 'UI/Text';

import { PaginationWrapper } from './styles';

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
  const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage]);
  const hasNextPage = useMemo(() => page < totalPages, [page, totalPages]);
  const hasPrevPage = useMemo(() => page > 1, [page]);
  const numberPages = useMemo(
    () => Array.from({ length: totalPages }, (v, k) => k + 1),
    [totalPages]
  );

  const renderNumberPages = useMemo(
    () =>
      numberPages.map(number => {
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
      }),
    [numberPages, onDefinitePage, page]
  );

  return (
    <PaginationWrapper columnGap={'15px'} justifyContent={'space-between'} width={'75%'}>
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
    </PaginationWrapper>
  );
};
