import React, { FC, useEffect, useState } from 'react';
import style from './search.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input/Input';

type Props = {
  saveNameValue: (value: string) => void;
};

const Search: FC<Props> = ({ saveNameValue }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    saveNameValue(value);
  }, [value]);

  return (
    <div>
      <form className={style.form}>
        <AiOutlineSearch className={style.icon} />
        {/* <input
          name='name'
          className={style.input}
          type='text'
          onChange={(e) => {
            e.preventDefault();
            setValue(e.currentTarget.value);
          }}
          value={value}
          placeholder='Enter GitHub user name'
        /> */}
        <Input
          name='name'
          type='text'
          handelFunc={(e) => {
            e.preventDefault();
            setValue(e.currentTarget.value);
          }}
          value={value}
          placeholder='Enter GitHub user name'
        />
      </form>
    </div>
  );
};

export default Search;
