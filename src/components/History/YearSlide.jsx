import React from 'react';
import PropTypes from 'prop-types';

function YearSlide({ isActive, year }) {
  return (
    <div className={`flex flex-col justify-end items-center gap-[40px] ${isActive ? '' : 'text-open-font-xxl -text--open-gray-300'}`}>
      <span>{year}</span>
      <img src={`${isActive ? '/src/assets/history_circle.svg' : '/src/assets/history_circleline.svg'}`} alt="" aria-hidden />
    </div>
  );
}

YearSlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired,
};

export default YearSlide;
