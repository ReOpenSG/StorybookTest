import React from 'react';
import PropTypes from 'prop-types';

function Snb({ inViewChar, inViewFunc, inViewEffect }) {
  return (
    <aside className="desktop:block tablet:block hidden min-w-[120px] desktop:pt-[100px] tablet:pt-[100px]  pt-[50px]">
      <nav className="sticky top-[100px]">
        <ul className="flex flex-col gap-[16px] font-open-label text-open-font-large -text--open-gray-300">
          <li className={inViewChar || inViewChar ? '-text--openfoundation-primary' : ''}>
            <a className="Char px-2 py-1" href="#Char">
              제품 및 특징
            </a>
          </li>
          <li className={!inViewChar && inViewFunc ? '-text--openfoundation-primary' : ''}>
            <a className="Func px-2 py-1" href="#Func">
              기능
            </a>
          </li>
          <li className={!inViewFunc && inViewEffect ? '-text--openfoundation-primary' : ''}>
            <a className="Effect px-2 py-1" href="#Effect">
              기대 효과
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewFunc: PropTypes.bool.isRequired,
  inViewEffect: PropTypes.bool.isRequired,
};

export default Snb;
