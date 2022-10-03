import React from 'react';
import '../styles/Task.css';

const Task = ({ text }) => {
  return (
    <div className='task-container'>
      <div className="task-text">
        {text}  
      </div>
      <div className="task-icon">
        X
      </div>
    </div>
  )
}

export default Task;