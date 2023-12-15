import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleSection.module.css';

function TitleSection({
  background, category, title, textAlign,
}) {
  return (
    <div className={`${styles.titleWrapper} ${background}`}>
      <div
        className={`${styles.titleContainer} ${textAlign}`}
      >
        <div className={styles.titleInner}>
          <h2>
            {category}
          </h2>
          <h3>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

TitleSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default TitleSection;
