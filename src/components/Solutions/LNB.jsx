import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Lnb({ LnbArray }) {
  return (
    <div>
      <ul className="flex gap-10">
        {LnbArray &&
          LnbArray.map((item) => (
            <li key={item}>
              <Link to={`/solutions/${item}`}>{item}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

Lnb.propTypes = {
  LnbArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Lnb;
