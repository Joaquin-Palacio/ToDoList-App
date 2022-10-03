import React from 'react';
import '../styles/List.css';
import Task from './Task';

const List = () => {
  return (
    <div className='list-container'>
      <h1>My Tasks</h1>
      <Task />
    </div>
  )
}

export default List; 