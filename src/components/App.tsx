import React, { useEffect, useState } from 'react';
import { getPoints } from '../service';
import { TPoint } from '../types';
import style from './app.module.scss';
import Map from './Map';

const App = () => {
  const [points, setPoints] = useState<TPoint[]>([]);

  useEffect(() => {
    getPoints().then(data => setPoints(data));
  }, []);

  return (
    <div className={style.app}>
      <Map {...{ points }} />
    </div>
  );
}

export default App;