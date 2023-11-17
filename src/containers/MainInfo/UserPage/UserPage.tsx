import style from './userPage.module.css';
import UserInfo from '../../../components/UserInfo/UserInfo';
import RepositoriesList from '../../../components/RepositoriesList/RepositoriesList';
import { Context } from '../../../app/Context';
import { useContext } from 'react';
import { IUserData } from '../../../app/App';

function UserPage() {
  const data: IUserData = useContext(Context);
  return (
    <div className={style.container}>
      <UserInfo
        avatar_url={data.avatar_url}
        name={data.name}
        login={data.login}
        followers={data.followers}
        following={data.following}
      />
      <RepositoriesList data={data} />
    </div>
  );
}
export default UserPage;
