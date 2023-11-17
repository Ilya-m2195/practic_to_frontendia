import React from 'react';
import StartingMessage from '../../../components/StartingMessage/StartingMessage';
import style from './startingPage.module.css';

function StartingPage() {
  return (
    <div className={style.pageContainer}>
      <StartingMessage />
    </div>
  );
}

export default StartingPage;
