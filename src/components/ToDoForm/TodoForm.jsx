import React, { useState } from 'react';
import Card from '../UI/Card';
import TodoInput from './TodoInput.jsx';
import './TodoForm.css';

const TodoForm = (props) => {
  const [expand, setExpand] = useState(false);

  const showFormHandler = () => {
    setExpand(true);
  };

  const closeFormHandler = () => {
    setExpand(false);
  };

  const saveTaskHandler = (enteredNewTask) => {
    const task = {
      ...enteredNewTask,
      id: Math.random().toString(),
    };

    props.onAddTask(task);
  };

  return (
    <Card className="todo-form">
      <div className="todo-form__action">{!expand && <button onClick={showFormHandler}>Add New Task</button>}</div>
      {expand && <TodoInput onSaveTask={saveTaskHandler} onClose={closeFormHandler} />}
    </Card>
  );
};

export default TodoForm;
