import style from './header.module.css';
import GitHubIcon from '../../components/GitHubIcon/GitHubIcon';
import Search from '../../components/Search/Search';
import { FC } from 'react';

type Props = {
  saveNameValue: (value: string) => void;
};

const Header: FC<Props> = ({ saveNameValue }) => {
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
