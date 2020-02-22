import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

function Pagination(props) {

  const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = props;

  const isFirstPage = currentPage < 2;
  const isLastPage = (currentPage * itemsPerPage) >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}

function mapState(state) {
  return {
    currentPage: state.currentPage + 1,
    totalItems: state.users.length
  };
}

const mapDispatch = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

export default connect(mapState, mapDispatch)(Pagination);