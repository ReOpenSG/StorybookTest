import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function ContactTitleInner({ category, title, desc }) {
  return (
    <>
      <h2 className={styles.titleCategory}>{category}</h2>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.titleDesc}>
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
