import React, { useContext } from 'react';
import { ContextObj } from './A';

function B() {
  const { color } = useContext(ContextObj);
  console.log(color);
  return (
    <div />
  );
}

export default B;
