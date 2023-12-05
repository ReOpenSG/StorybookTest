import React from 'react';
import PropTypes from 'prop-types';

function SoultionBanner({ currentLocation, prevLocation }) {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1320px] w-full desktop:flex tablet:flex hidden flex-col gap-[20px] py-[100px] items-center">
        <h3 className="sr-only">솔루션 배너</h3>
        <p className="font-open-paragraph w-full text-open-font-large mobile:text-open-font-medium">
          {prevLocation}
          &nbsp; &gt; &nbsp;
          {currentLocation}
        </p>
        <div className="w-full h-[400px] flex flex-col justify-center px-[200px] -bg--open-gray-50 rounded-[20px] tablet:text-center">
          <p className="font-open-label text-open-font-xl">물류 자동화의 첫 걸음</p>
          <p className="font-open-heading text-open-font-xxxxxl">
            Open
            {currentLocation}
            &reg;
          </p>
        </div>
      </div>
    </section>
  );
}

SoultionBanner.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  prevLocation: PropTypes.string.isRequired,
};

export default SoultionBanner;
