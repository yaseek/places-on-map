import React, { useMemo } from 'react';
import {TPoint} from '../types';
import Need from './Need';
import style from './popup.module.scss';

const PopupContent = ({ name, description, address, open, needs }: Partial<TPoint>) => {
  const sortedNeeds = useMemo(() => {
    if (!needs) {
      return [];
    }
    return needs.concat([]).sort((a, b) => a.rating - b.rating);
  }, [needs]);

  return (
    <div>
      <h4>
        {name}
      </h4>
      <p className={style.description}>
        {description}
      </p>
      {address && <div><strong>{address}</strong></div>}
      {open && <div>{open}</div>}
      {sortedNeeds.map(need => <Need key={need.id} {...need}/>)}
    </div>
  );
};

export default PopupContent;