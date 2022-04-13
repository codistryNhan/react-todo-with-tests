import React from 'react';

const TaskInput = ({ onSubmit }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter new task'
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default TaskInput;
