import React, { useContext } from 'react';
import { ContextObj } from './A';

function B(){
  const { color} = useContext(ContextObj);
  // let {setColorState} = color;
  console.log(color);
  color.setColorState("blue")
  console.log(color);
  return;
}

export default B;
