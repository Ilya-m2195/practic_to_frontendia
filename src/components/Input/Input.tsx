import React, { FC } from 'react';
import style from './input.module.css';

type Props = {
  name: string;
  type: string;
  handelFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const Input: FC<Props> = ({ name, type, handelFunc, value, placeholder }) => {
  return (
    <input
      name={name}
      className={style.input}
      type={type}
      onChange={handelFunc}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
