import { FC } from 'react';
import style from './button.module.css';

type Props = {
  iconCode: string;
  isDisabled: boolean;
  handelFunc: () => void;
};

const Button: FC<Props> = ({ iconCode, isDisabled, handelFunc }) => {
  return (
    <button onClick={handelFunc} disabled={isDisabled} className={style.btpPagination}>
      {iconCode}
    </button>
  );
};

export default Button;
