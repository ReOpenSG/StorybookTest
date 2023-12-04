import React from 'react';
import PropTypes from 'prop-types';

function Banner({ currentLocation, prevLocation }) {
  return (
    <div>
      <p>
        {prevLocation}
        &nbsp; ▶️ &nbsp;
        {currentLocation}
      </p>
      <p>banner 이미지입니다</p>
    </div>
  );
}

Banner.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  prevLocation: PropTypes.string.isRequired,
};

export default Banner;
