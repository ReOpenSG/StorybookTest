import React from 'react';
import PropTypes from 'prop-types';

function Char({ industryDesc, refs }) {
  return (
    <section
      id="Char"
      ref={refs}
      className="flex flex-col desktop:gap-open-2xl tablet:desktop:gap-open-2xl gap-open-xl desktop:pt-open-5xl tablet:pt-open-5xl pt-open-3xl"
    >
      <h3 className="font-open-label desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-large">
        산업 특징
      </h3>
      <p className="font-open-paragraph desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
        {industryDesc}
      </p>
    </section>
  );
}

Char.propTypes = {
  industryDesc: PropTypes.string.isRequired,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Char;
