import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function ContactTitleSection({ category, title, desc }) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.titleCategory}>{category}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.titleDesc}>{desc}</p>
    </div>
  );
}

ContactTitleSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ContactTitleSection;
