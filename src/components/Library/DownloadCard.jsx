import React from 'react';
import PropTypes from 'prop-types';
import DownloadIcon from './DownloadIcon';
import styles from '@/components/Library/Library.module.css';

function DownloadCard({
  mainText, subText, category, href, download, ariaLabel,
}) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardInner}>
          <h4 className={styles.cardTitle}>
            <span>
              {mainText}
              <br />
              {subText}
            </span>
          </h4>
          <span className={styles.cardCategoryText}>{category}</span>
        </div>
        <a
          href={href}
          className={styles.cardLinkWrapper}
          download={download}
          aria-label={ariaLabel}
        >
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
}

DownloadCard.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default DownloadCard;
