import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LNB({ data }) {
  return (
    <div>
      <ul className="flex gap-10">
        {data &&
          data.map((item) => (
            <li key={item[0]}>
              <Link to={`/solutions/${item[0]}`}>{item[0]}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

LNB.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          솔루션: PropTypes.string,
          제품명: PropTypes.string,
          제품설명: PropTypes.string,
          특징: PropTypes.arrayOf(PropTypes.string),
          기능: PropTypes.arrayOf(PropTypes.string),
          기대효과: PropTypes.arrayOf(PropTypes.string),
          산업군: PropTypes.arrayOf(PropTypes.string),
        }),
      ]),
    ),
  ).isRequired,
};
