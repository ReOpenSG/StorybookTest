import React from 'react';
import PropTypes from 'prop-types';

function LibraryTitleInner({ category, title }) {
  return (
    <>
      <h2 className="-text--openfoundation-primary font-open-label text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl">
        {category}
      </h2>
      <h3 className="-text--openfoundation-primary font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl">
        {title}
      </h3>
    </>
  );
}

LibraryTitleInner.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LibraryTitleInner;
