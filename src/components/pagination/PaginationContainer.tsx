import React, { FC } from 'react';
import Pagination from './Pagination';
import style from './pagination.module.css';
export type SetFuncType = (page: number) => void;

type Props = {
  totalCount: number;
  currentPage: number;
  pageLimit: number;
  setCurrentPage: SetFuncType;
};

const PaginationContainer: FC<Props> = ({ totalCount, currentPage, pageLimit, setCurrentPage }) => {
  const paginate = (page: number) => {
    setCurrentPage(page);
  };
  const nextPage = (page: number) => setCurrentPage(page + 1);
  const prevPage = (page: number) => setCurrentPage(page - 1);
  const firstPage = () => setCurrentPage(1);
  const lastPage = (page: number) => setCurrentPage(page);

  return (
    <div className={style.paginationContainer}>
      <Pagination
        totalCount={totalCount}
        pageLimit={pageLimit}
        currentPage={currentPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default PaginationContainer;
