import React from 'react';
import PropTypes from 'prop-types';

function Effect({ currentLocation, data }) {
  return (
    <section className="flex flex-col desktop:gap-[40px] tablet:gap-[40px] gap-[20px]">
      <h3 className="font-open-label desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-xl">
        기대효과
      </h3>
      <ul className="flex flex-col gap-[10px]">
        {data &&
          data[currentLocation].기대효과.map((item) => (
            <li
              key={item}
              className="list-disc list-inside font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium"
            >
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

Effect.propTypes = {
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

export default Effect;
