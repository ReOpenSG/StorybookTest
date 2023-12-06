import React from 'react';

import PropTypes from 'prop-types';

function HistorySlide({ isActive, year, history }) {
  return (
    <div className={`w-full h-full px-[40px] py-[120px] flex flex-col items-center justify-start rounded-[20px] gap-9 ${isActive ? '-bg--open-gray-950' : '-bg--openfoundation-black'}`}>
      <span className="block text-center text-open-font-xxxxxl">{year}</span>
      <ul className="pl-[40px] list-disc font-open-paragraph text-open-font-xl flex flex-col gap-[10px]">
        {history.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

HistorySlide.propTypes = {
  isActive: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HistorySlide;
