import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import NoticeList from './NoticeList';
import ListButtons from './ListButtons';

function NoticeSection({ sortedNotices }) {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 6;

  const currentNotices = sortedNotices?.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage,
  );

  const pageCount = Math.ceil(sortedNotices.length / noticesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageCount);
  };

  const ListButtonsProps = {
    currentPage,
    pageCount: Math.ceil(sortedNotices.length / noticesPerPage),
    handleFirstPage,
    handlePrevPage,
    handlePageChange,
    handleNextPage,
    handleLastPage,
  };
  return (
    <section className="flex flex-col justify-center items-center min-w-[500px] gap-4 py-10">
      <p className="text-open-font-medium text-right px-10 min-w-[600px] w-[1320px]">
        Total: {sortedNotices?.length} [{currentPage} / {ListButtonsProps.pageCount}]
      </p>

      <NoticeList notices={sortedNotices} currentNotices={currentNotices} />

      <ListButtons {...ListButtonsProps} />
    </section>
  );
}
export default NoticeSection;

NoticeSection.propTypes = {
  sortedNotices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.shape({
          seconds: PropTypes.number,
          nanoseconds: PropTypes.number,
        }),
      }).isRequired,
    }),
  ).isRequired,
};
