import React from 'react';

const Task = ({ task: { label, completed }, onToggle }) => {
  return (
    <li className={completed ? 'completed' : null} onClick={onToggle}>
      {label}
    </li>
  );
};

export default Task;
