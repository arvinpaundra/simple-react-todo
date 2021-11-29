import React, { useState } from 'react';
import Card from '../UI/Card';
import TodoList from './TodoList';
import FilterLists from './FilterLists';
import './Lists.css';

const Lists = (props) => {
  const [filteredPriority, setFilteredPriority] = useState('All');

  const filterHandler = (selectedTasks) => {
    setFilteredPriority(selectedTasks);
  };

  const filteredTasks = props.tasks.filter((task) => {
    return task.priority === filteredPriority;
  });

  const getIdTaskHandler = (idTask) => {
    props.onRemoveTask(idTask);
  };

  return (
    <Card className="lists">
      <FilterLists onFilter={filterHandler} selected={filteredPriority} />
      {filteredPriority === 'All' ? <TodoList tasks={props.tasks} onGetId={getIdTaskHandler} /> : <TodoList tasks={filteredTasks} onGetId={getIdTaskHandler} />}
    </Card>
  );
};

export default Lists;
