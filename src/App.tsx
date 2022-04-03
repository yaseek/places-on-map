import React, { useEffect, useState } from 'react';
import { getPoints } from './service';
import { TPoint } from './types';
import style from './app.module.scss';
import Map from './components/Map';

const App = () => {
  const [points, setPoints] = useState<TPoint[]>([]);

  useEffect(() => {
    getPoints().then(data => setPoints(data));
  }, []);

  return (
    <div className={style.app}>
      <h1>Example of the map</h1>
      <hr />
      <div style={{ height: 500, padding: 24 }}>
        <Map {...{ points }} />
      </div>
      <hr />
      <p>Some kind of text.</p>
    </div>
  );
}

export default App;