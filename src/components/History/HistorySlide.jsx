import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/History/History.module.css';

function HistorySlide({ isActive, year, history }) {
  return (
    <div className={`${styles.historySlide} ${isActive ? styles.isActive : styles.isInActive}`}>
      <span className={styles.historySlideTitle}>{year}</span>
      <ul className={styles.historySlideDescription}>
        {history.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

HistorySlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlide;
