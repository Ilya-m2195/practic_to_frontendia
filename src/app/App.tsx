import './styles/normalize.css';
import './styles/app.css';
import Header from '../containers/Header/Header';
import MainInfo from '../containers/MainInfo/MainInfo';
import useDebounce from '../hooks/useDebounce';
import StartingPage from '../containers/MainInfo/StartingPage/StartingPage';
import { useEffect, useState } from 'react';
import { Context } from './Context';
import { getUserData } from '../api/api';

export interface IUserData {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  name: null;
  public_repos?: number;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<IUserData>();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const saveNameValue = (value: string) => setName(value);

  const debouncedSearch = useDebounce(name, 700);

  useEffect(() => {
    setIsLoading(true);
    if (debouncedSearch) {
      getUserData(debouncedSearch)
        .then((res) => setUserData(res))
        .catch((error) => setError(error));
    }
    setIsLoading(false);
  }, [debouncedSearch]);
  return (
    <Context.Provider value={userData!}>
      <div>
        <Header saveNameValue={saveNameValue} />
        {error && !userData ? (
          <h2 className="errorMessage">{'This user was not found. try again!'}</h2>
        ) : null}
        {isLoading ? <h2 className="loadingMessage">{'Loading...'}</h2> : null}
        {userData ? <MainInfo /> : <StartingPage />}
      </div>
    </Context.Provider>
  );
}

export default App;
