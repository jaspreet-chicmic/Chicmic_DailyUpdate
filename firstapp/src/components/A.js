import React, { createContext, useState } from 'react';
import B from './B';
import C from './C';

export const ContextObj = createContext();

function A() {
  const [colorState, setColorState] = useState('green');
  return (
    <ContextObj.Provider value={{ color: { colorState }, notColor: false }}>
      <B />
    </ContextObj.Provider>
  );
}

export default A;
