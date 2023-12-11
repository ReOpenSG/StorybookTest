import React from 'react';
import PropTypes from 'prop-types';
import DownloadIcon from './DownloadIcon';
// import DownloadIcon from './DownloadIcon';
// import styles from '@/components/Library/Library.module.css';

function DownloadCard({
  text, category, href, download, ariaLabel,
}) {
  return (
    <div className="border -border--open-gray-300 rounded-[20px] px-open-2xl py-open-2xl tablet:py-open-4xl desktop:py-open-4xl tablet:grow desktop:grow">
      <div className="w-open-6xl tablet:w-full desktop:w-full h-[170px] tablet:h-[340px] desktop:h-[340px] flex flex-col justify-between">
        <div className="flex flex-col-reverse gap-open-xl">
          <h4 className="-text--openfoundation-primary font-open-label text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl">
            <span>
              OPENSG
              <br />
              {text}
            </span>
          </h4>
          <span className="-text--open-gray-600 font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
            {category}
          </span>
        </div>
        <a href={href} className="flex justify-end" download={download} aria-label={ariaLabel}>
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
}

DownloadCard.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default DownloadCard;
