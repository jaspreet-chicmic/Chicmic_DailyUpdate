import React, { useState } from 'react'

function UseState() {
  const [state,setState] = useState(12);
  // console.log(state);
  // setState(90);
  // console.log(state);
  //runs many times and gives an error = will run infinite times
    return (
    <div>useState</div>
    )
}

export default UseState