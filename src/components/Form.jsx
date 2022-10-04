import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid'; 
import '../styles/Form.css';

const Form = (props) => {

  const [ input, setInput ] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    }
    props.onSubmit(newTask);
  }

  return (
    <form 
      className='task-form'
      onSubmit={handleSubmit}
    >
      
      <input 
        type="text" 
        className='task-input'
        placeholder='Write your next task..'
        name='text'
        onChange={handleChange}
        required={true}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}

export default Form;