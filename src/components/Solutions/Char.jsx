import React from 'react';
import PropTypes from 'prop-types';

function Char({ currentLocation, data }) {
  return (
    <section className="flex flex-col gap-[40px]">
      <h3 className="font-open-label desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-xl">
        제품 및 특징
      </h3>
      <div className="flex gap-[36px]">
        <p className="font-open-label desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          제품
        </p>
        <p className="flex-1 font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          {data && data[currentLocation].제품설명}
        </p>
      </div>
      <div className="flex desktop:gap-[36px] tablet:gap-[36px] gap-[16px]">
        <p className="font-open-label desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          특징
        </p>
        <ul className="font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium flex flex-wrap flex-1 desktop:gap-[36px] tablet:gap-[36px] gap-[16px]">
          {data &&
            data[currentLocation].특징.map((item) => (
              <li
                key={item}
                className="desktop:min-w-[482px] tablet:min-w-[482px] min-w-[258px] flex flex-col gap-[10px] flex-1 px-[40px] py-[20px] -bg--open-gray-50 rounded-[20px]"
              >
                <p className="font-open-label desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-large">
                  Real Time
                </p>
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

Char.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  data: PropTypes.objectOf(
    PropTypes.shape({
      솔루션: PropTypes.string,
      제품명: PropTypes.string,
      제품설명: PropTypes.string,
      특징: PropTypes.arrayOf(PropTypes.string),
      기능: PropTypes.arrayOf(PropTypes.string),
      기대효과: PropTypes.arrayOf(PropTypes.string),
      산업군: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Char;
