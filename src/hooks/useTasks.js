import React from 'react';
import { getTasks, updateTask, createTask as _createTask } from '../api';

const useTasks = () => {
  const [tasks, setTasks] = React.useState([]);
  const refreshTasks = async () => {
    setTasks(await getTasks());
  };

  const toggleTask = async (index) => {
    const newTask = { ...tasks[index], completed: !tasks[index].completed };
    await updateTask(newTask);
    setTasks(await getTasks());
  };

  const createTask = async (taskName) => {
    const newTask = await _createTask(taskName);
    setTasks(tasks ? [...tasks, newTask] : [newTask]);
  };

  React.useEffect(() => {
    refreshTasks();
  }, []);

  return [tasks, { toggleTask, createTask }];
};

export default useTasks;
