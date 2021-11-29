import React, { useState } from 'react';
import TodoForm from './components/ToDoForm/TodoForm';
import Lists from './components/ToDoList/Lists';
import './App.css';

const DUMMY_TASKS = [
  { id: 1, task: 'Sweep the floor', status: true, priority: 'Low', deadline: new Date(2021, 11, 12) },
  { id: 2, task: 'Go to the market', status: false, priority: 'Urgent', deadline: new Date(2021, 11, 13) },
  { id: 3, task: 'Feed my cat', status: true, priority: 'Medium', deadline: new Date(2021, 12, 14) },
];

const App = () => {
  const [lists, setLists] = useState(DUMMY_TASKS);

  const addTaskHandler = (list) => {
    setLists((prevLists) => {
      return [list, ...prevLists];
    });
  };

  const removeTaskHandler = (idTask) => {
    console.log(idTask);
  };

  return (
    <div className="app">
      <TodoForm onAddTask={addTaskHandler} />
      <Lists tasks={lists} onRemoveTask={removeTaskHandler} />
    </div>
  );
};

export default App;
