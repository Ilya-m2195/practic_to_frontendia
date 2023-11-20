import style from './header.module.css';
import GitHubIcon from '../../components/GitHubIcon/GitHubIcon';
import Search from '../../components/Search/Search';

const Header = ({ saveNameValue }: any) => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <GitHubIcon />
        <Search saveNameValue={saveNameValue} />
      </div>
    </header>
  );
};

export default Header;
