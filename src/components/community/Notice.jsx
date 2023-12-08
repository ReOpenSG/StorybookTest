import React from 'react';
import { number, shape, string } from 'prop-types';
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
    <NavLink to={`/community/${notice?.id}`} state={{ currentNotice: notice, notice }}>
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
  notices: shape({
    index: number.isRequired,
    title: string.isRequired,
    updatedAt: string.isRequired,
    image: string.isRequired,
    content: string.isRequired,
  }).isRequired,
  notice: shape({
    title: string.isRequired,
    updatedAt: string.isRequired,
  }).isRequired,
};
