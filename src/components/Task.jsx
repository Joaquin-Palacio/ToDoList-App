import React from "react";
import "../styles/Task.css";
import { MdDeleteForever } from "react-icons/md";

const Task = ({ text, completed, id, doTask, deleteTask }) => {
  return (
    <div
      className={completed ? "task-container task-completed" : "task-container"}
    >
      <div className="task-text" onClick={() => doTask(id)}>
        {text}
      </div>
      <div className="icon-container" onClick={() => deleteTask(id)}>
        <MdDeleteForever className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
