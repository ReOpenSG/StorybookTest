import React from 'react';
import PropTypes from 'prop-types';

function Title({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-[1320px] flex flex-col gap-open-2xl">
      {/* h3 색상 '--open-accent-accent': '#0071E3'로 변경할 것 */}
      <h3 className="text-[#0071E3] font-open-heading desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-large">
        {title}
      </h3>
      <div className="flex flex-col gap-open-xl">
        <p className="font-open-heading desktop:text-open-font-xxxl tablet:text-open-font-xxxl text-open-font-xl">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Title.defaultProps = {
  children: null,
};

export default Title;
