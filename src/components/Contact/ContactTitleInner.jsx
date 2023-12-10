import React from 'react';
import PropTypes from 'prop-types';

function ContactTitleInner({ category, title, desc }) {
  return (
    <>
      <h2 className="-text--openfoundation-primary font-open-label text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl">
        {category}
      </h2>
      <h3 className="-text--openfoundation-primary font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl">
        {title}
      </h3>
      <p className="-text--openfoundation-primary font-open-paragraph text-open-font-medium">
        {desc}
      </p>
    </>
  );
}

ContactTitleInner.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ContactTitleInner;
