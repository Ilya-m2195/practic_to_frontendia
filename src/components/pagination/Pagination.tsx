import { SetFuncType } from './PaginationContainer';
import style from './pagination.module.css';
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
export const Pagination = ({
  totalCount,
  pageLimit,
  currentPage,
  paginate,
  nextPage,
  prevPage,
  firstPage,
  lastPage
}: Props) => {
  let pages: Array<number> = [];

  const createPages = (
    pages: Array<number>,
    pagesCount: number,
    currentPage: number,
    pageLimit: number
  ) => {
    if (pagesCount / pageLimit > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      }
    } else {
      if (pagesCount < pageLimit) {
        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
          pages.push(i);
        }
      } else {
        for (let i = 1; i <= Math.ceil(pagesCount / pageLimit); i++) {
          pages.push(i);
        }
      }
    }
  };

  createPages(pages, totalCount / pageLimit, currentPage, pageLimit);

  return (
    <div>
      <nav aria-label="Pagination">
        <button
          onClick={firstPage}
          disabled={currentPage === 1 ? true : false}
          className={style.btpPagination}
        >
          &laquo;
        </button>
        <button
          onClick={() => prevPage(currentPage)}
          disabled={currentPage === 1 ? true : false}
          className={style.btpPagination}
        >
          &lsaquo;
        </button>
        {pages.map((page) => {
          return (
            <button
              key={page}
              onClick={() => paginate(page)}
              disabled={page === currentPage ? true : false}
              className={page === currentPage ? style.currentPage : style.page}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => nextPage(currentPage)}
          className={style.btpPagination}
          disabled={currentPage === Math.ceil(totalCount / pageLimit)}
        >
          &rsaquo;
        </button>
        <button
          onClick={() => lastPage(Math.ceil(totalCount / pageLimit))}
          disabled={currentPage === Math.ceil(totalCount / pageLimit) ? true : false}
          className={style.btpPagination}
        >
          &raquo;
        </button>
      </nav>
    </div>
  );
};
