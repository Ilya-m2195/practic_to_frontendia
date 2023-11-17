import React from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './startingMessage.module.css';

function StartingMessage() {
  return (
    <div className={style.container}>
      <FiSearch className={style.icon} />
      <p className={style.description}>Start with searching a GitHub user</p>
    </div>
  );
}

export default StartingMessage;
