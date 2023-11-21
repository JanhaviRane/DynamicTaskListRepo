
import { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function TaskForm({ addTask }) {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({ title: input, completed: false });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="text" value={input} onChange={event => setInput(event.target.value)} ref={inputRef} />
      </Form.Group>
      <Button variant="success" type="submit">Add Task</Button>
    </Form>
  );
}

export default TaskForm;
