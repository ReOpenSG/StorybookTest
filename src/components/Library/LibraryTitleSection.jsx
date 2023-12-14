import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/components/Library/Library.module.css';

function LibraryTitleSection({ category, title }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.titleCategory}>{category}</h2>
      <h3 className={styles.titleText}>
        {title}
      </h3>
    </div>
  );
}

LibraryTitleSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LibraryTitleSection;
