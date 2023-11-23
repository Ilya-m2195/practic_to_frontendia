const useCreatePaginationRepos = (
  pagesCount: number,
  currentPage: number,
  pageLimit: number
): Array<number> => {
  let pages: Array<number> = [];
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
  return pages;
};

export default useCreatePaginationRepos;
