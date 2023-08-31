import React from 'react'

function TodoList(props) {

  return (
    <li className='list-item'>
      {props.item}
    </li>
  )
}

export default TodoList