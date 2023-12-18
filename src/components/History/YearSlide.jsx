import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/History/History.module.css';
import historyCirlce from '@/assets/history_circle.svg';
import historyCirlceLine from '@/assets/history_circleline.svg';

function YearSlide({ isActive, year }) {
  return (
    <div className={`${styles.yearSlide} ${isActive ? styles.isActive : styles.isInActive}`}>
      <span>{year}</span>
      <img src={`${isActive ? historyCirlce : historyCirlceLine}`} alt="" aria-hidden />
    </div>
  );
}

YearSlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.string.isRequired,
};

export default YearSlide;
