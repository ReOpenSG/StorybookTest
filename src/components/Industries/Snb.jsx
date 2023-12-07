import React from 'react';
import PropTypes from 'prop-types';
import styles from './Industries.module.css';

function Snb({ inViewChar, inViewProduct }) {
  return (
    <aside className={styles.Snb}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={inViewChar ? styles.item : ''}>
            <a className={styles.link} href="#Char">
              산업 특징
            </a>
          </li>
          <li className={!inViewChar && inViewProduct ? styles.item : ''}>
            <a className={styles.link} href="#Product">
              관련 제품
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewProduct: PropTypes.bool.isRequired,
};

export default Snb;
