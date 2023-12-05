import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Lnb({ LnbArray }) {
  return (
    <nav className="flex justify-center">
      <ul className="desktop:w-full tablet:gap-[64px] max-w-[1320px] flex flex-wrap gap-[16px] justify-between py-[10px]">
        {LnbArray &&
          LnbArray.map((item) => (
            <li
              key={item}
              className="font-open-label text-open-font-medium desktop:text-open-font-large tablet:text-open-font-large"
            >
              <NavLink
                to={`/solutions/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? '-text--openfoundation-primary transition-colors duration-500 px-2 py-1'
                    : '-text--open-gray-300 transition-colors duration-500 px-2 py-1'
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
