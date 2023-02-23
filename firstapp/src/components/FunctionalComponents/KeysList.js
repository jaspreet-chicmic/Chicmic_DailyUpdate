import React from 'react'

function KeysList(props) {
  console.log(typeof props.arr);
  const todoItems = props.arr.map((todo,idx) =>
      <li key={todo.id}>
        {todo}
      </li>
    );
  return (
    <ul>
      {todoItems}
    </ul>
  )
}

export default KeysList