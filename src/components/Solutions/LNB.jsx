import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Lnb({ LnbArray }) {
  return (
    <nav>
      <ul className="w-full flex flex-wrap justify-between py-[10px]">
        {LnbArray &&
          LnbArray.map((item) => (
            <li
              key={item}
              className="font-open-label text-open-font-large mobile:text-open-font-medium"
            >
              <NavLink
                to={`/solutions/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? '-text--openfoundation-primary transition-all duration-500'
                    : '-text--open-gray-300 transition-all duration-500'
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

Lnb.propTypes = {
  LnbArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Lnb;
