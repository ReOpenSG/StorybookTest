import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ title, subTitle, currentLocation }) {
  return (
    <NavLink
      to={`/${currentLocation}/${subTitle}`}
      className={({ isActive }) =>
        isActive
          ? 'flex flex-col text-center items-center rounded-[20px] border -border--open-gray-200 desktop:p-open-xl tablet:p-open-xl p-open-lg desktop:gap-open-xl tablet:gap-open-xl gap-open-lg desktop:w-[200px] tablet:w-[200px] w-[100px]  -text--openfoundation-secondary -bg--open-blue-900'
          : 'flex flex-col text-center items-center rounded-[20px] border -border--open-gray-200 desktop:p-open-xl tablet:p-open-xl p-open-lg desktop:gap-open-xl tablet:gap-open-xl gap-open-lg desktop:w-[200px] tablet:w-[200px] w-[100px]  -text--open-gray-200'
      }
    >
      <div className="w-full flex justify-center">
        <picture>
          <source media="(max-width: 1023px)" srcSet="http://via.placeholder.com/50x40" />
          <img src="http://via.placeholder.com/100x80" alt="Machines" />
        </picture>
      </div>
      <div className="flex flex-col gap-open-lg">
        <p className="font-open-heading desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          {title}
        </p>
        <p className="font-open-label text-open-font-medium">{subTitle}</p>
      </div>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default Card;
