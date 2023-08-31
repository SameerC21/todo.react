import React, { useState } from 'react'

function TodoInput(props) {
  const[inputText,setInputText] = useState('');
  const [error,setError] = useState('')
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const addTask = (e) => {
    props.addList(inputText)
    setInputText('');
    e.preventDefault();
    if (inputText.length === 0){
      setError(true);
      // const newItem = {
      //   text: inputText,
      //   id: Date.now()
      // };
      }else{
        setError(false);
    }
    console.log('Input is:', inputText);
  }
  return (
    <div className='input-container'>
        <form>
          <input 
            type='text' 
            className='input-box-todo' 
            placeholder='Enter Task'
            value={inputText}
            onChange={handleInputChange}/>
          {error? <label>Input field can't be empty</label>:""}
          <button type='submit'
            className='add-btn'
            onClick={addTask}>+
          </button>
        </form>

    </div>
  )
}

export default TodoInput