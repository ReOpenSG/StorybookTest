import React from 'react';
import { PropTypes } from 'prop-types';

// 컴포넌트로 분리한 페이지 정보와 버튼을 보여주는 컴포넌트
function ListButtons({
  currentPage,
  pageCount,
  handleFirstPage,
  handlePrevPage,
  handlePageChange,
  handleNextPage,
  handleLastPage,
}) {
  return (
    <div className="flex gap-4 py-4 text-open-font-large">
      <button type="button" onClick={handleFirstPage} className="text-open-font-large">
        &#8810;
      </button>

      <button type="button" onClick={handlePrevPage} className="-rotate-90">
        &#8896;
      </button>

      {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`w-9 h-9 text-open-font-medium ${
            currentPage === pageNumber ? 'bg-black text-white rounded-full' : ''
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button type="button" onClick={handleNextPage} className="-rotate-90">
        &#8897;
      </button>

      <button type="button" onClick={handleLastPage}>
        &#8811;
      </button>
    </div>
  );
}
export default ListButtons;
ListButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  handleFirstPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handleLastPage: PropTypes.func.isRequired,
};
