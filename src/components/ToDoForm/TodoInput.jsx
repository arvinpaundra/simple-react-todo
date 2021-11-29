import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = (props) => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredPriority, setEnteredPriority] = useState('');

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newTaskData = {
      task: enteredTask,
      deadline: new Date(enteredDate),
      priority: enteredPriority,
    };

    props.onSaveTask(newTaskData);

    setEnteredTask('');
    setEnteredDate('');
    setEnteredPriority('');
  };

  return (
    <form>
      <div className="form-control">
        <div className="form-input">
          <label>Task</label>
          <input type="text" onChange={taskChangeHandler} value={enteredTask} />
        </div>
        <div className="form-input">
          <label>Deadline</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className="form-input">
          <label>Priority</label>
          <div className="radio-opt">
            <div className="radio-wrapper">
              <input type="radio" id="Low" value="Low" onChange={priorityChangeHandler} checked={enteredPriority === 'Low'} />
              <label htmlFor="Low">Low</label>
            </div>
            <div className="radio-wrapper">
              <input type="radio" id="Medium" value="Medium" onChange={priorityChangeHandler} checked={enteredPriority === 'Medium'} />
              <label htmlFor="Medium">Medium</label>
            </div>
            <div className="radio-wrapper">
              <input type="radio" id="Urgent" value="Urgent" onChange={priorityChangeHandler} checked={enteredPriority === 'Urgent'} />
              <label htmlFor="Urgent">Urgent</label>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-input__actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add task
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
