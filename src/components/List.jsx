import React from 'react';
import '../styles/List.css';
import ListOfTask from './ListOfTask';

const List = () => {
  return (
    <div className='list-container'>
      <h1>My Tasks</h1>
      <ListOfTask />
    </div>
  )
}

export default List; 