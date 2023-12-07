import React from 'react';
import PropTypes from 'prop-types';
import styles from './Industries.module.css';

function Char({ industryDesc, refs }) {
  return (
    <section id="Char" ref={refs} className={styles.Char}>
      <h3 className={styles.CharTitle}>산업 특징</h3>
      <p className={styles.CharDesc}>{industryDesc}</p>
    </section>
  );
}

Char.propTypes = {
  industryDesc: PropTypes.string.isRequired,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Char;
