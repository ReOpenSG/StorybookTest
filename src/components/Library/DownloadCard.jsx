import React from 'react';
import PropTypes from 'prop-types';
import DownloadIcon from './DownloadIcon';
import styles from '@/components/Library/Library.module.css';

function DownloadCard({
  text,
  category,
  koHref,
  koDownload,
  koAriaLabel,
  enHref,
  enDownload,
  enAriaLabel,
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
        <div className="flex justify-end gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop">
          <a href={koHref} download={koDownload} aria-label={koAriaLabel}>
            <div className={styles.downloadWrapper}>
              <DownloadIcon />
              <span className={styles.downloadText}>
                국문
              </span>
            </div>
          </a>
          <a href={enHref} download={enDownload} aria-label={enAriaLabel}>
            <div className={styles.downloadWrapper}>
              <DownloadIcon />
              <span className={styles.downloadText}>
                영문
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

DownloadCard.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  koHref: PropTypes.string.isRequired,
  koDownload: PropTypes.string.isRequired,
  koAriaLabel: PropTypes.string.isRequired,
  enHref: PropTypes.string.isRequired,
  enDownload: PropTypes.string.isRequired,
  enAriaLabel: PropTypes.string.isRequired,
};

export default DownloadCard;
