import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, desc, children }) {
  return (
    <li className="flex-1 basis-[288px] -bg--open-gray-950 rounded-[20px] p-open-gutter-desktop desktop:min-h-[460px] tablet:min-h-[460px] min-h-[0px]">
      <div className="flex flex-col desktop:gap-open-margin-desktop tablet:gap-open-margin-desktop gap-open-2xl">
        <div className="flex flex-col desktop:gap-open-2xl tablet:gap-open-2xl gap-open-xl">
          <span className="font-open-heading desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
            {title}
          </span>
          <div className="flex flex-col font-open-heading desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-large">
            {children}
          </div>
        </div>
        <p className="font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          {desc}
        </p>
      </div>
    </li>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
