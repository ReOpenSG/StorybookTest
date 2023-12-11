import React from 'react';
import { PropTypes } from 'prop-types';

function BannerSection({ category, part }) {
  return (
    <section className="w-full py-20 flex flex-col text-center gap-8">
      <h3 className="text-open-font-xxl">{category}</h3>
      <h2 className="text-open-font-xxxxl font-bold">{part}</h2>
    </section>
  );
}

export default BannerSection;
BannerSection.propTypes = {
  category: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
};
