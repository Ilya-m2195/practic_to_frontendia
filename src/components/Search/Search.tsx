import React, { FC, useEffect, useState } from 'react';
import style from './search.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input/Input';

type Props = {
  saveNameValue: (value: string) => void;
};

const Search: FC<Props> = ({ saveNameValue }) => {
  const [value, setValue] = useState('');

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    saveNameValue(value);
  }, [value]);

  return (
    <div>
      <form className={style.form}>
        <AiOutlineSearch className={style.icon} />
        <Input
          name='name'
          type='text'
          handelFunc={handler}
          value={value}
          placeholder='Enter GitHub user name'
        />
      </form>
    </div>
  );
};

export default Search;
