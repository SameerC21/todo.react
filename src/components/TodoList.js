import React from 'react'

function TodoList(props) {

  return (
    <ul>
      <li className='list-item'>
        {props.item}
      </li>
    </ul>
  )
}

export default TodoList