import React from 'react';
import PropTypes from 'prop-types';

function Char({ currentLocation, data, refs }) {
  return (
    <section
      id="Char"
      ref={refs}
      className="flex flex-col desktop:gap-[40px] tablet:gap-[40px] gap-[20px] desktop:pt-[100px] tablet:pt-[100px] pt-[50px]"
    >
      <span className="font-open-label desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium desktop:mb-[-30px] tablet:mb-[-30px] mb-[-20px]">
        Open
        {currentLocation}
      </span>
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
                  특징 제목
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
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Char;
