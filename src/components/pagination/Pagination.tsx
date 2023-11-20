import { FC } from 'react';
import { SetFuncType } from './PaginationContainer';
import style from './pagination.module.css';
import Button from '../Button/Button';
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
  let pages: Array<number> = [];
  const isFirstPage = currentPage === 1;
  const NumberPages = (pagesCount: number, pageLimit: number): number => pagesCount / pageLimit;
  const isLastPage = currentPage === Math.ceil(NumberPages(totalCount, pageLimit));
  const isCurrentPage = (page: number, currentPage: number): boolean => page === currentPage;

  const createPages = (
    pages: Array<number>,
    pagesCount: number,
    currentPage: number,
    pageLimit: number
  ) => {
    if (pagesCount / pageLimit > 10) {
      switch (currentPage > 5) {
        case true: {
          for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pages.push(i);
            if (i === pagesCount) break;
          }
          break;
        }
        case false: {
          for (let i = 1; i <= 10; i++) {
            pages.push(i);
            if (i === pagesCount) break;
          }
          break;
        }
      }
    } else {
      switch (pagesCount < pageLimit) {
        case true: {
          for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i);
          }
          break;
        }
        case false: {
          for (let i = 1; i <= Math.ceil(pagesCount / pageLimit); i++) {
            pages.push(i);
          }
        }
      }
    }
  };

  createPages(pages, NumberPages(totalCount, pageLimit), currentPage, pageLimit);

  return (
    <div>
      <nav aria-label='Pagination'>
        <Button iconCode='&laquo;' isDisabled={isFirstPage} handelFunc={firstPage} />
        <Button
          iconCode='&lsaquo;'
          isDisabled={isFirstPage}
          handelFunc={() => prevPage(currentPage)}
        />
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            disabled={isCurrentPage(page, currentPage)}
            className={isCurrentPage(page, currentPage) ? style.currentPage : style.page}
          >
            {page}
          </button>
        ))}
        <Button
          iconCode='&rsaquo;'
          isDisabled={isLastPage}
          handelFunc={() => nextPage(currentPage)}
        />
        <Button
          iconCode='&raquo;'
          isDisabled={isLastPage}
          handelFunc={() => lastPage(Math.ceil(NumberPages(totalCount, pageLimit)))}
        />
      </nav>
    </div>
  );
};

export default Pagination;
