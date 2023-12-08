import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Notice from './Notice';

function NoticeList({ notices, currentNotices }) {
  return (
    <div className="border-b -border--open-gray-300">
      {currentNotices?.map((notice) => (
        <Notice key={notice?.id} notice={notice} notices={notices} />
      ))}
    </div>
  );
}

export default NoticeList;

NoticeList.propTypes = {
  notices: arrayOf(
    shape({
      id: string.isRequired,
      index: number.isRequired,
      title: string.isRequired,
      updatedAt: string.isRequired,
      image: string.isRequired,
      content: string.isRequired,
    }),
  ).isRequired,
  currentNotices: arrayOf(
    shape({
      id: string.isRequired,
      index: number.isRequired,
      title: string.isRequired,
      updatedAt: string.isRequired,
      image: string.isRequired,
      content: string.isRequired,
    }),
  ).isRequired,
};
