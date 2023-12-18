import React from 'react';
import { PropTypes } from 'prop-types';

function ProductCard({ name, desc, imgUrl }) {
  return (
    <div className="w-full flex justify-between items-center gap-open-4xl p-open-2xl tablet:p-open-4xl desktop:px-open-5xl desktop:py-open-4xl -bg--open-gray-950 rounded-[30px]  border  border-transparent pointerhover:hover:-border--open-accent-accent">
      <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-xl">
        <h4 className="flex tablet:flex-col desktop:flex-col gap-open-sm font-open-label text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl">
          <span>{name}</span>
        </h4>
        <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-lg">
          <p className="font-open-paragraph text-open-font-medium  tablet:text-open-font-large desktop:text-open-font-large">
            {desc}
          </p>
          <button
            type="button"
            className="font-open-label text-open-font-small tablet:text-open-font-medium desktop:text-open-font-medium"
          >
            Learn More &gt;
          </button>
        </div>
      </div>
      <div className="hidden tablet:block tablet:w-[300px] desktop:block desktop:w-[400px] text-center -text--openfoundation-secondary">
        <img src={imgUrl} alt="product" className="w-full" />
      </div>
    </div>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
