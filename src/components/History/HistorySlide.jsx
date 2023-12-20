import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styles from '@/components/History/History.module.css';

function HistorySlide({
  isActive, year, history,
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <div ref={ref} className={`${styles.historySlide} ${isActive || inView ? styles.isActive : styles.isInActive}`}>
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
