import { useState, useEffect } from 'react';
import { getRepos } from '../api/api';
import { IReposData } from '../components/RepositoriesList/RepositoriesList';

const useGetReposData = (
  value: string,
  currentPage: number,
  pageLimit: number
): [IReposData[], boolean, boolean] => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Array<IReposData>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (value: string, currentPage: number, pageLimit: number) => {
      setIsLoading(true);
      try {
        const result = await getRepos(value, currentPage, pageLimit);
        setData(result as IReposData[]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    if (value) {
      fetchData(value, currentPage, pageLimit);
    }
  }, [value, currentPage]);
  return [data!, isError, isLoading];
};

export default useGetReposData;
