import React from 'react';
import PropTypes from 'prop-types';

function Snb({ inViewChar, inViewProduct }) {
  return (
    <aside className="desktop:block tablet:block hidden min-w-[120px] desktop:pt-open-5xl tablet:pt-open-5xl">
      <nav className="sticky top-open-7xl">
        <ul className="flex flex-col gap-open-gutter-mobile -text--open-gray-300 font-open-label text-open-font-large">
          <li className={inViewChar ? '-text--openfoundation-primary' : ''}>
            <a className="px-open-sm py-open-md" href="#Char">
              산업 특징
            </a>
          </li>
          <li className={!inViewChar && inViewProduct ? '-text--openfoundation-primary' : ''}>
            <a className="px-open-sm py-open-md" href="#Product">
              관련 제품
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewProduct: PropTypes.bool.isRequired,
};

export default Snb;
