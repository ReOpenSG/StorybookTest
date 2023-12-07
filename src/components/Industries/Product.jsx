import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Product({ industryProducts, refs }) {
  return (
    <section
      id="Product"
      ref={refs}
      className="flex flex-col desktop:gap-open-2xl tablet:desktop:gap-open-2xl gap-open-xl desktop:pt-open-5xl tablet:pt-open-5xl pt-open-3xl"
    >
      <h3 className="font-open-label desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-large">
        관련 제품
      </h3>
      <div className="flex flex-col desktop:gap-open-2xl tablet:gap-open-2xl gap-mobile-gap">
        {Object.entries(industryProducts).map((item) => (
          <Link key={uuidv4()} to={`/solutions/${item[0]}`}>
            <div className="flex items-start desktop:gap-desktop-gap tablet:gap-desktop-gap gap-mobile-gap hover:underline">
              <div className="desktop:w-open-7xl tablet:w-open-7xl w-open-5xl">
                <img src="http://via.placeholder.com/200x250" alt="제픔 사진" className="w-full" />
              </div>
              <ul className="flex-1 desktop:px-open-xl tablet:px-open-xl desktop:py-open-xl tablet:py-open-xl py-open-lg px-open-lg flex flex-col gap-open-xl">
                <li className="mb-[-20px] font-open-heading desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-large">
                  {item[0]}
                </li>
                <li className="font-open-label desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-medium">
                  {item[1].제품명}
                </li>
                <li className="font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
                  {item[1].제품설명}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

Product.propTypes = {
  industryProducts: PropTypes.oneOfType([PropTypes.object]).isRequired,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Product;
