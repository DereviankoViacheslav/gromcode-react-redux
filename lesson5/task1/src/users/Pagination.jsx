import React from 'react';

function Pagination(props) {

  const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = props;
  const pageNumber = currentPage + 1;
  const isFirstPage = pageNumber < 2;
  const isLastPage = (pageNumber * itemsPerPage) >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}

export default Pagination;