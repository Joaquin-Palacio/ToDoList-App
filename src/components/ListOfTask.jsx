import React, { useState } from "react";
import Form from "./Form";
import Task from "./Task";
import "../styles/ListOfTask.css";

const ListOfTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };

  const doTask = (id) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="list-task-container">
        {tasks.map((e) => (
          <Task
            key={e.id}
            id={e.id}
            text={e.text}
            completed={e.completed}
            deleteTask={deleteTask}
            doTask={doTask}
          />
        ))}
      </div>
    </>
  );
};

export default ListOfTask;
