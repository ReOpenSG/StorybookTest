import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

function Notice({ notice, notices }) {
  // Timestamp를 Date 객체로 변환
  const updatedAtDate = notice?.data?.updatedAt?.toDate();

  // 날짜를 "YYYY-MM-DD" 형식으로 포맷
  const formattedDate = updatedAtDate?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <NavLink to={`/community/${notice?.id}`} state={{ currentNotice: notice, notices }}>
      <div className="flex items-center justify-between min-w-[500px] w-[1320px] p-10 border-t -border--open-gray-300">
        <h2 className="text-open-font-xxl font-semibold hover:underline decoration-slate-600">
          {notice?.data?.title}
        </h2>
        <time className="text-open-font-medium -text--open-gray-600" dateTime={formattedDate}>
          {formattedDate}
        </time>
      </div>
    </NavLink>
  );
}

export default Notice;
Notice.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.objectOf({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
  notice: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.objectOf({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        updatedAt: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
};
