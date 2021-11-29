import React from 'react';
import './FilterLists.css';

const FilterLists = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div className="filter-lists">
      <h3>
        <span>Filter</span> priority
      </h3>
      <select value={props.selected} onChange={filterChangeHandler}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>
  );
};

export default FilterLists;
