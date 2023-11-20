import './styles/normalize.css';
import './styles/app.css';
import Header from '../containers/Header/Header';
import MainInfo from '../containers/MainInfo/MainInfo';
import useDebounce from '../hooks/useDebounce';
import StartingPage from '../containers/MainInfo/StartingPage/StartingPage';
import { useState } from 'react';
import { Context } from './Context';
import useGetUserData from '../hooks/useGetUserData';
import Loader from '../components/Loader/loader';

export interface IUserData {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  name: null;
  public_repos?: number;
}

const App = () => {
  const [name, setName] = useState('');
  const saveNameValue = (value: string) => setName(value);
  const delayTime = 1000;

  const debouncedSearch = useDebounce(name, delayTime);
  const [data, isError, isLoading] = useGetUserData(debouncedSearch);

  return (
    <Context.Provider value={data!}>
      <div>
        <Header saveNameValue={saveNameValue} />
        <div>
          {isError && !data && (
            <h2 className='errorMessage'>{'This user was not found. try again!'}</h2>
          )}
          {isLoading && <Loader />}
        </div>
        {data ? <MainInfo /> : <StartingPage />}
      </div>
    </Context.Provider>
  );
};

export default App;
