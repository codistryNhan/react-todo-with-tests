import React from 'react';

import Task from './Task';

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={task.label}
          task={task}
          onToggle={() => onToggleTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
