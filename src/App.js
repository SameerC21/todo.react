import React, { useEffect, useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo,setListTodo]= useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText])
  }
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <hr />
        {
          listTodo.map((listItem,i)=>{
             return (
              <TodoList key={i} item={listItem}/>
            ) 
          })
        }
      </div>
    </div>
  )
}


export default App