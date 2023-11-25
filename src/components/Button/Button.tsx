import { FC } from 'react';
import style from './button.module.css';

type Props = {
  iconCode: string | number;
  isDisabled: boolean;
  handlerFunc: () => void;
};

const Button: FC<Props> = ({ iconCode, isDisabled, handlerFunc }) => {
  const classNames =
    typeof iconCode === 'string'
      ? style.btpPagination
      : isDisabled
      ? style.currentPage
      : style.page;

  return (
    <button onClick={handlerFunc} disabled={isDisabled} className={classNames}>
      {iconCode}
    </button>
  );
};

export default Button;
