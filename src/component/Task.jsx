
import React from 'react';
import { ListGroup,Form } from 'react-bootstrap';

function Task({ task, toggleCompletion }) {
  return (
    <ListGroup.Item action>
      <Form.Check 
        type="checkbox"
        label={task.title}
        checked={task.completed}
        onChange={() => toggleCompletion(task)}
      />
    </ListGroup.Item>
  );
}

export default Task;
