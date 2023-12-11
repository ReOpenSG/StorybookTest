import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Community.module.css';

function Notice({ notice, notices }) {
  const updatedAtDate = notice?.data?.updatedAt?.toDate();

  const formattedDate = updatedAtDate?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <NavLink to={`/community/${notice?.id}`} state={{ currentNotice: notice, notices }}>
      <div className={styles.noticeItem}>
        <h4 className={styles.noticeTitle}>{notice?.data?.title}</h4>
        <time className={styles.noticeCreatedAt} dateTime={formattedDate}>
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
