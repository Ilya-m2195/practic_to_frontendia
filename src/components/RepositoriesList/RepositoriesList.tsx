import style from './repositoriesList.module.css';
import RepositoriesItem from '../RepositoriesItem/RepositoriesItem';
import { useEffect, useState } from 'react';
import { getRepos } from '../../api/api';
import { PaginationContainer } from '../pagination/PaginationContainer';
import { IUserData } from '../../app/App';

interface IReposData {
  name: string;
  description: string;
  id: string;
}

type Props = {
  data: IUserData;
};

export default function RepositoriesList({ data }: Props) {
  const [repos, setRepos] = useState<Array<IReposData>>();
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(4);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getRepos(data.login, currentPage, pageLimit)
      .then((res) => setRepos(res))
      .catch((error) => setError(error));

    if (data.public_repos) {
      setTotalCount(data.public_repos);
    }
  }, [currentPage, data]);
  return (
    <div>
      <h2 className={style.title}>Repositories ({data.public_repos})</h2>
      {error || repos?.length === 0 ? (
        <h2 className="errorMessage">{'User`s repositories was not found.'}</h2>
      ) : null}
      {repos
        ? repos.map((rep: IReposData) => {
            return <RepositoriesItem key={rep.id} name={rep.name} description={rep.description} />;
          })
        : null}
      <div>
        {data.public_repos ? (
          <div className={style.paginationBlock}>
            <span>
              {currentPage * pageLimit - pageLimit + 1} -{' '}
              {currentPage * pageLimit - pageLimit + 1 !== data.public_repos
                ? `${currentPage * pageLimit} of `
                : null}
              {data.public_repos} items
            </span>
            <PaginationContainer
              totalCount={totalCount}
              currentPage={currentPage}
              pageLimit={pageLimit}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
