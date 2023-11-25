import { FC } from 'react';
import { SetFuncType } from './PaginationContainer';
import Button from '../Button/Button';
import useCreatePaginationRepos from '../../hooks/useCreatePaginationPages';

type Props = {
  totalCount: number;
  pageLimit: number;
  currentPage: number;
  paginate: SetFuncType;
  nextPage: SetFuncType;
  prevPage: SetFuncType;
  firstPage: () => void;
  lastPage: SetFuncType;
};

const Pagination: FC<Props> = ({
  totalCount,
  pageLimit,
  currentPage,
  paginate,
  nextPage,
  prevPage,
  firstPage,
  lastPage
}) => {
  const isFirstPage = currentPage === 1;
  const NumberPages = (pagesCount: number, pageLimit: number): number => pagesCount / pageLimit;
  const isLastPage = currentPage === Math.ceil(NumberPages(totalCount, pageLimit));
  const isCurrentPage = (page: number, currentPage: number): boolean => page === currentPage;

  const handlerPaginate = (page: number) => paginate(page);
  const handlerPrevPage = () => prevPage(currentPage);
  const handlerNextPage = () => nextPage(currentPage);
  const handlerLastPage = () => lastPage(Math.ceil(NumberPages(totalCount, pageLimit)));

  const pages = useCreatePaginationRepos(
    NumberPages(totalCount, pageLimit),
    currentPage,
    pageLimit
  );

  return (
    <div>
      <nav aria-label='Pagination'>
        <Button iconCode='&laquo;' isDisabled={isFirstPage} handlerFunc={firstPage} />
        <Button iconCode='&lsaquo;' isDisabled={isFirstPage} handlerFunc={handlerPrevPage} />
        {pages.map((page) => (
          <Button
            key={page}
            iconCode={page}
            handlerFunc={() => handlerPaginate(page)}
            isDisabled={isCurrentPage(page, currentPage)}
          />
        ))}
        <Button iconCode='&rsaquo;' isDisabled={isLastPage} handlerFunc={handlerNextPage} />
        <Button iconCode='&raquo;' isDisabled={isLastPage} handlerFunc={handlerLastPage} />
      </nav>
    </div>
  );
};

export default Pagination;
