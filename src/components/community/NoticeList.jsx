import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Notice from './Notice';

function NoticeList({ notices }) {
  return (
    <div className="border-b border-gray-400">
      {notices.map((notice) => (
        <Notice key={notice.id} notice={notice} />
      ))}
    </div>
  );
}

export default NoticeList;

NoticeList.propTypes = {
  notices: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      createdAt: string.isRequired,
    }),
  ).isRequired,
};
