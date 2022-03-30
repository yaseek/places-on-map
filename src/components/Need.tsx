import React from 'react';
import {TNeed} from '../types';

const Need = ({ name, description }: TNeed) => (
  <div style={{ marginBottom: 8 }}>
    <hr/>
    <h5>{name}</h5>
    <div>
      {description}
    </div>
  </div>
);

export default Need;
