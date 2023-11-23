import { FC } from 'react';
import style from './button.module.css';

type Props = {
  iconCode: string | number;
  isDisabled: boolean;
  handelFunc: () => void;
};

const Button: FC<Props> = ({ iconCode, isDisabled, handelFunc }) => {
  return (
    <button
      onClick={handelFunc}
      disabled={isDisabled}
      className={
        typeof iconCode === 'string'
          ? style.btpPagination
          : isDisabled
          ? style.currentPage
          : style.page
      }
    >
      {iconCode}
    </button>
  );
};

export default Button;
