import React from 'react';
import PropTypes from 'prop-types';

function Char({ currentLocation, data }) {
  return (
    <section>
      <h3>
        Open
        {currentLocation}
      </h3>
      <h2>제품 및 특징</h2>
      <div>
        <div>
          <h4>제품</h4>
          <p>{data && data[currentLocation].제품설명}</p>
        </div>
        <div>
          <h4>특징</h4>
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
