import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = { itemsPerPage: 3 };

  render() {
    const { currentPage } = this.props;
    const { itemsPerPage } = this.state;
    let startIndex = currentPage * itemsPerPage;
    const showedUsers = this.props.users
      .slice(startIndex, itemsPerPage + startIndex)
      .map(({ id, ...user }) => <User key={id} {...user} />);

    return (
      <div>
        <Pagination itemsPerPage={itemsPerPage} />
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

export default connect(mapState)(UsersList);