import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = (props) => {
  const year = props.deadline.getFullYear();
  const month = props.deadline.toLocaleString('en-US', { month: 'short' });
  const day = props.deadline.toLocaleString('en-US', { day: '2-digit' });
  const [isDone, setIsDone] = useState(props.status);

  const checkboxHandler = () => {
    setIsDone(!isDone);
  };

  const deleteButtonHandler = (event) => {
    props.onGetId(props.id);
  };

  return (
    <div>
      <div className="list-item">
        <div className={`list-item__task ${isDone === true ? 'done' : ''}`}>
          <input type="checkbox" checked={isDone} onChange={checkboxHandler} />
          <div className="list-item__task">{props.task}</div>
          <p>{`${day}, ${month.toLowerCase()} ${year}`}</p>
          <p style={{ color: props.priority === 'Low' ? 'green' : props.priority === 'Medium' ? 'orange' : props.priority === 'Urgent' ? 'red' : 'black' }}>{props.priority}</p>
        </div>
        <div className="list-item__tool">
          <MdDelete className="delete" onClick={deleteButtonHandler} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TodoListItem;
