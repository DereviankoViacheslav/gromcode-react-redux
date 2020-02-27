import React from 'react';

function Filter({ filterText, onChange, count }) {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Filter;