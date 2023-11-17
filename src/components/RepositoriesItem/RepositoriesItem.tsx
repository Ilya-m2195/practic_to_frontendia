import React from 'react';
import style from './RepositoriesItem.module.css';

type Props = {
  name: string;
  description: string;
};

function RepositoriesItem({ name, description }: Props) {
  return (
    <div className={style.container}>
      <h3>{name}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
}

export default RepositoriesItem;
