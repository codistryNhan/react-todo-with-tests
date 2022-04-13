import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import TaskList from './TaskList';

describe('<TaskList />', () => {
  const tasks = [
    { label: 'Do this', completed: false },
    { label: 'Do that', completed: true },
    { label: 'Do nothing', completed: false },
  ];

  it('must render tasks', () => {
    render(<TaskList tasks={tasks} />);

    const renderedTasks = tasks.map((task) => screen.getByText(task.label));
    expect(renderedTasks.length).toBe(3);
  });

  it('must fire onToggle callback', () => {
    const mockOnToggle = jest.fn();
    render(<TaskList tasks={tasks} onToggleTask={mockOnToggle} />);

    const renderedTasks = tasks.map((task) => screen.getByText(task.label));
    fireEvent.click(renderedTasks[1]);
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });
});
