import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Notice from './Notice';

function NoticeList({ notices }) {
  return (
    <div className="border-b -border--open-gray-300">
      {notices.map((notice) => (
        <Notice key={notice.id} notice={notice} notices={notices} />
      ))}
    </div>
  );
}

export default NoticeList;

NoticeList.propTypes = {
  notices: arrayOf(
    shape({
      id: number.isRequired,
      index: number.isRequired,
      name: string.isRequired,
      title: string.isRequired,
      createdAt: string.isRequired,
      image: string.isRequired,
      content: string.isRequired,
    }),
  ).isRequired,
};
