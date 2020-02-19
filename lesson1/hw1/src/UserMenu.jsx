import React from 'react';
import { DataContext } from './data-context';

class UserMenu extends React.Component {
  render() {
    console.log(this.context);
    
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img
          className="menu__avatar"
          src={`${this.context.avatar_url}`}
          alt="User Avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = DataContext;

export default UserMenu;