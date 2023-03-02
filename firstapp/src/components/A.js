import React, { createContext, useContext, useState } from 'react';
import B from './B';
import C from './C';

export const ContextObj = createContext();

function A() {
  // const {contextObj} = useContext(ContextObj);
  const [colorState, setColorState] = useState('green');
  console.log(colorState);
  return (
    
    <ContextObj.Provider value={{ color: { colorState, setColorState }, notColor: false }}>
    {/* <div>{colorState}</div> */}

    {/* {contextObj.color = "blue"} */}
      <B />
      <C/>
    </ContextObj.Provider>
  );
}

export default A;
