import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles/App.css';
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = useCallback((task) => {
    setTasks([...tasks, task]);
  }, [tasks]);

  const toggleCompletion = useCallback((taskToToggle) => {
    setTasks(tasks.map(task => task === taskToToggle ? {...task, completed: !task.completed} : task));
  }, [tasks]);

  useEffect(() => {
    document.title = `${tasks.filter(task => !task.completed).length} tasks left`;
  }, [tasks]);

  let filteredTasks;
  switch (filter) {
    case 'completed':
      filteredTasks = tasks.filter(task => task.completed);
      break;
    case 'incomplete':
      filteredTasks = tasks.filter(task => !task.completed);
      break;
    default:
      filteredTasks = tasks;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h1> Tasks </h1>
            <Button variant="success" onClick={() => setFilter('all')}>All</Button>
            <Button variant="primary" onClick={() => setFilter('completed')}>Completed</Button>
            <Button variant="danger" onClick={() => setFilter('incomplete')}>Incomplete</Button>
            <TaskForm addTask={addTask} />
            <TaskList tasks={filteredTasks} toggleCompletion={toggleCompletion} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
