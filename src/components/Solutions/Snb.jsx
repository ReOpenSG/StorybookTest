import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function Snb({ inViewChar, inViewFunc, inViewEffect }) {
  return (
    <aside className={styles.Snb}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={inViewChar && inViewChar ? styles.item : ''}>
            <a className={styles.link} href="#Char">
              제품 및 특징
            </a>
          </li>
          <li className={!inViewChar && inViewFunc ? styles.item : ''}>
            <a className={styles.link} href="#Func">
              기능
            </a>
          </li>
          <li className={!inViewFunc && inViewEffect ? styles.item : ''}>
            <a className={styles.link} href="#Effect">
              기대 효과
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Snb.propTypes = {
  inViewChar: PropTypes.bool.isRequired,
  inViewFunc: PropTypes.bool.isRequired,
  inViewEffect: PropTypes.bool.isRequired,
};

export default Snb;
