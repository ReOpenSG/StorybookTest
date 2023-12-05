import React from 'react';
import PropTypes from 'prop-types';

function Char({ currentLocation, data }) {
  return (
    <section>
      <span>
        Open
        {currentLocation}
      </span>
      <p>제품 및 특징</p>
      <div>
        <div>
          <span>제품</span>
          <p>{data && data[currentLocation].제품설명}</p>
        </div>
        <div>
          <span>특징</span>
          <ul>
            {data &&
              data[currentLocation].특징.map((item, index) => (
                <li key={item}>
                  {index + 1}
                  {item}
                </li>
              ))}
          </ul>
        </div>
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
