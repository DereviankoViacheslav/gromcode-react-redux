import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class Users extends React.Component {
  onUserCreate = () => {
    const id = `${Date.now()}`
    const user = {
      id,
      name: `User # ${id}`
    };
    this.props.createUser(user);
  };

  render() {
    const { users, deleteUser } = this.props;

    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onUserCreate}>Create user</button>
        <ul className="users__list">
          {users.map((user) => {
            return (
              <li key={user.id} className="users__list-item">
                <span>{user.name}</span>
                <button
                  className="users__delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
}

const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);