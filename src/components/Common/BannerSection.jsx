import React from 'react';
import { PropTypes } from 'prop-types';

function BannerSection({ category, part }) {
  return (
    <section className="w-full py-open-3xl flex flex-col items-center gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl">
      <p className="text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl font-open-label">
        {category}
      </p>
      <h2 className="text-open-font-xxl desktop:text-open-font-xxxxl  tablet:text-open-font-xxxxl font-open-heading">
        {part}
      </h2>
    </section>
  );
}

export default BannerSection;
BannerSection.propTypes = {
  category: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
};
