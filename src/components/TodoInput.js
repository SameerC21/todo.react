import React, { useState } from 'react'

function TodoInput(props) {
  const[inputText,setInputText] = useState('');
  const [error,setError] = useState('')
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    props.addList(inputText);
    setInputText('');
    if (inputText.length === 0){
      setError(true);
      }else{
        setError(false);
    }
    console.log('Input is:', inputText);
  }
  return (
    <div className='input-container'>
        <form>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input 
            id='new-todo'
            type='text' 
            className='input-box-todo' 
            placeholder='Enter Task'
            value={inputText}
            onChange={handleInputChange}/>
          {error? <label className='errormsg'>Input field can't be empty</label>:""}
          <button type='submit'
            className='add-btn'
            onClick={addTask}>+
          </button>
        </form>

    </div>
  )
}

export default TodoInput