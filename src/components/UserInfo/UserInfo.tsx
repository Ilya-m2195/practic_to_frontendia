import { IUserData } from '../../app/App';
import style from './userInfo.module.css';
import { GoPeople, GoPerson } from 'react-icons/go';

const UserInfo = ({ avatar_url, name, login, followers, following }: IUserData) => {
  const errorMessage = 'Unknown user`s name';

  return (
    <div>
      <img
        className={style.img}
        src={
          avatar_url ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BMwe19CuZpy0fsRTCAsQU9YR11XVqMmsrGFsz1JHYMxk3A_Urh2Iz_imwgxOUwToXbs&usqp=CAU'
        }
        alt='user'
      />
      <h3 className={style.name}>{name ? name : errorMessage}</h3>
      <p className={style.nick}>{login}</p>
      <div className={style.followersBlock}>
        <span>
          <GoPeople /> {followers} Followers
        </span>
        <span>
          <GoPerson /> {following} Following
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
