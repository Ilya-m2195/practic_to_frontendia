import { FC } from 'react';
import style from './button.module.css';

type Props = {
  iconCode: string | number;
  isDisabled: boolean;
  handlerFunc: () => void;
};

const AddClassNames = (iconCode: string | number, isDisabled: boolean) => {
  if (typeof iconCode === 'string') {
    return style.btpPagination;
  } else {
    return isDisabled ? style.currentPage : style.page;
  }
};

const Button: FC<Props> = ({ iconCode, isDisabled, handlerFunc }) => {
  return (
    <button
      onClick={handlerFunc}
      disabled={isDisabled}
      className={AddClassNames(iconCode, isDisabled)}
    >
      {iconCode}
    </button>
  );
};

export default Button;
