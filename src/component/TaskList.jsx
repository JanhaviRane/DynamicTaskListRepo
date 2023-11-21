// TaskList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';

function TaskList({ tasks, toggleCompletion }) {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <Task key={index} task={task} toggleCompletion={toggleCompletion} />
      ))}
    </ListGroup>
  );
}

export default TaskList;
