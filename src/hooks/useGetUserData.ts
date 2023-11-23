import { useState, useEffect } from 'react';
import { getUserData } from '../api/api';
import { IUserData } from '../app/App';

const useGetUserData = (value: string): [IUserData, boolean, boolean] => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (value: string) => {
      setIsLoading(true);
      try {
        const result = await getUserData(value);
        setData(result as IUserData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    if (value) {
      fetchData(value);
    }
  }, [value]);
  return [data!, isError, isLoading];
};

export default useGetUserData;
