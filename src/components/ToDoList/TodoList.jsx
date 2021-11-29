import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  const getIdHandler = (enteredId) => {
    props.onGetId(enteredId);
  };
  return (
    <div className="todo-list">
      {props.tasks.map((list) => (
        <TodoListItem key={list.id} id={list.id} task={list.task} status={list.status} priority={list.priority} deadline={list.deadline} onGetId={getIdHandler} />
      ))}
    </div>
  );
};

export default TodoList;
