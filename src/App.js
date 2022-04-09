import React from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const handleNewTask = (task) => setTasks([...tasks, task]);

  return (
    <div className='App'>
      <TaskInput onSubmit={handleNewTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
