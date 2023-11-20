import style from './mainInfo.module.css';
import UserPage from './UserPage/UserPage';

const MainInfo = () => {
  return (
    <main className={`container ${style.container}`}>
      <UserPage />
    </main>
  );
};

export default MainInfo;
