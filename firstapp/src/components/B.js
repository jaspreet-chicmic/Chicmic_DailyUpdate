import React from 'react'
import { useContext } from 'react'
import { ContextObj } from './A';
function B() {
    const {color} = useContext(ContextObj);
    console.log(color)
    return (
        <div>
     </div>
  )
}

export default B