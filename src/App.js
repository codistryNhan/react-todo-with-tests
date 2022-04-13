import React from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

function App() {
  const [tasks, { createTask, toggleTask }] = useTasks();

  return (
    <div className='App'>
      <TaskInput onSubmit={createTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
