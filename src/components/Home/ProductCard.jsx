import React from 'react';
import { PropTypes } from 'prop-types';

export function ProductCard({ name, desc }) {
  return (
    <div className="w-full flex justify-between items-center gap-open-4xl p-open-2xl tablet:p-open-4xl desktop:px-open-5xl desktop:py-open-4xl -bg--open-gray-950 rounded-[30px]">
      <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-xl">
        <h4 className="flex tablet:flex-col desktop:flex-col gap-open-sm font-open-label text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxxl">
          <span>Open</span>
          <span>{name}</span>
        </h4>
        <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-lg">
          <p className="font-open-paragraph text-open-font-medium desktop:text-open-font-large">
            {desc}
          </p>
          <button
            type="button"
            className="font-open-label text-open-font-medium desktop:text-open-font-large"
          >
            Learn More &gt;
          </button>
        </div>
      </div>
      <div className="hidden tablet:w-[300px] desktop:w-[400px] text-center">이미지</div>
    </div>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
