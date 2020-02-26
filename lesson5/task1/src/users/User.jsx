import React from 'react';

function User(props) {
  return (
    <li className="user">
      <span className="user__name">{props.name}</span>
      <span className="user__age">{props.age}</span>
    </li>
  );
}

export default User;