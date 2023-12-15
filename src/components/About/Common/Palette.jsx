import React from 'react';
import PropTypes from 'prop-types';

function Palette({ rgb, cmyk, hex, roundedLeft, roundedRight }) {
  return (
    <li
      className={`flex items-end flex-1 desktop:h-open-8xl tablet:h-open-8xl desktop:px-open-2xl tablet:px-open-2xl px-open-xl py-open-xl bg-[${hex}] 
        mobile:rounded-l-[20px]
        ${roundedLeft && 'desktop:rounded-l-[20px] tablet:rounded-l-[20px]'} 
        ${roundedRight && 'desktop:rounded-r-[20px] tablet:rounded-r-[20px]'}
      `}
    >
      <ul className="w-full flex flex-col items-end gap-open-lg">
        <li>{rgb}</li>
        <li>{cmyk}</li>
        <li>{hex}</li>
      </ul>
    </li>
  );
}

Palette.propTypes = {
  rgb: PropTypes.string.isRequired,
  cmyk: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
};
Palette.defaultProps = {
  roundedLeft: false,
  roundedRight: false,
};

export default Palette;
