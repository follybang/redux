import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable =
    currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

  const prevButton = isPrevPageAvailable ? (
    <button className="btn" onClick={goPrev}>
      ←
    </button>
  ) : (
    <button className="btn" disabled></button>
  );

  const nextButton = isNextPageAvailable ? (
    <button className="btn" onClick={goNext}>
      →
    </button>
  ) : (
    <button className="btn" disabled></button>
  );

  return (
    <div className="pagination">
      {prevButton}
      <span className="pagination__page">{currentPage + 1}</span>
      {nextButton}
    </div>
  );
};

export default Pagination;
