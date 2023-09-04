import React from 'react'

function TodoList(props) {
  const Delete = () => {
    
  };
  return (
    <ul>
      <li className='list-item'>
        <p>{props.item}</p>
        <button onClick={Delete} className='delete'>Del</button>
      </li>
    </ul>
  )
}

export default TodoList