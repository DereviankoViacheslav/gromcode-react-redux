import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';
import Pagination from './Pagination';
import User from './User';

const itemsPerPage = 3;

function UsersList({ users, goPrev, goNext, currentPage }) {
  let startIndex = currentPage * itemsPerPage;
  const showedUsers = users
    .slice(startIndex, itemsPerPage + startIndex)
    .map((user) => <User key={user.id} {...user} />);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">{showedUsers}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state)
  };
}

const mapDispatchToProps = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);