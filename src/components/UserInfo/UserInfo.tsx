import { IUserData } from '../../app/App';
import style from './userInfo.module.css';
import { GoPeople, GoPerson } from 'react-icons/go';
import defaultAvatar from '../../img/defaultAvatar.png';

const UserInfo = ({ avatar_url, name, login, followers, following }: IUserData) => {
  const errorMessage = 'Unknown user`s name';

  return (
    <div>
      <img className={style.img} src={avatar_url || defaultAvatar} alt='user' />
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
