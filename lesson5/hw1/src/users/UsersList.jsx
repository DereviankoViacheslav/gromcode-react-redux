import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import { filteredUsersSelector } from './users.selectors';
import Filter from '../Filter';
import User from './User';

function UsersList({ usersList, setFilterText, filterText }) {

  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={setFilterText}
      />
      <ul className="users">
        {usersList.map((user) => <User key={user.id} {...user} />)}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    usersList: filteredUsersSelector(state),
    filterText: state.users.filterText
  };
}

const mapDispatchToProps = {
  setFilterText: usersActions.setFilterText
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);