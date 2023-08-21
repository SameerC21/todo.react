import React, { useState } from 'react'

function TodoInput(props) {
  const[inputText,setInputText] = useState('');
  const [error,setError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length===0){
      setError(true);
    }
  }

  return (
    <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            className='input-box-todo' 
            placeholder='Enter Task'
            value={inputText}
            onChange={e=> {
              setInputText(e.target.value)
            }}/>
          {error? <label>Input field can't be empty</label>:""}
          <button 
            className='add-btn'
            onClick={()=>{
              props.addList(inputText)
              setInputText('')
            }}>+
          </button>
        </form>

    </div>
  )
}

export default TodoInput