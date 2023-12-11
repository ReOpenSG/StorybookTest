import React from 'react';
import { PropTypes } from 'prop-types';
import Notice from './Notice';

function NoticeList({ notices, currentNotices }) {
  return (
    <div className="border-b -border--open-gray-300">
      {currentNotices
        ?.slice()
        .toSorted((a, b) => b.data.index - a.data.index)
        ?.map((notice) => (
          <Notice key={notice?.id} notice={notice} notices={notices} />
        ))}
    </div>
  );
}

export default NoticeList;

NoticeList.propTypes = {
  notices: PropTypes.arrayOf(
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
  currentNotices: PropTypes.arrayOf(
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
