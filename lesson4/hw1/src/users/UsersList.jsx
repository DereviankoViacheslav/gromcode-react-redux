import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = { itemsPerPage: 3 };
  
  render() {
    const { users, goPrev, goNext, currentPage } = this.props;
    const { itemsPerPage } = this.state;
    let startIndex = currentPage * itemsPerPage;
    const showedUsers = users
      .slice(startIndex, itemsPerPage + startIndex)
      .map(({ id, ...user }) => <User key={id} {...user} />);

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
  };
}

function mapState(state) {
  return {
    users: state.users,
    currentPage: state.currentPage
  };
}

const mapDispatch = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

export default connect(mapState, mapDispatch)(UsersList);