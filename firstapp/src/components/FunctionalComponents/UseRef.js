import React, { useEffect, useMemo, useRef, useState } from 'react'

function UseRef() {
  const [input,setInput] = useState("");
  const inputCountRef = useRef(0);
  const inputTagRef = useRef();
  const prevInput = useRef();
  //useMemo memoize 
//   const memo = useMemo(()=>{
//     return {background:"green",id:1}
//   },[id]);
  useEffect(()=>{
    inputCountRef.current = inputCountRef.current + 1;
    prevInput.current = input;
    console.log(prevInput.current)
  },[input]);

  function focus(){
    inputTagRef.current.focus();
  }
  return (
    <div>
        <input value={input} ref={inputTagRef} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={focus}>Input</button>
        <h3>Values changed {inputCountRef.current} times</h3>
        <h3>Prev value: {prevInput.current}</h3>
    </div>
  )
}

export default UseRef