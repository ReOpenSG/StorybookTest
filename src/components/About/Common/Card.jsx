import React from 'react';
import PropTypes from 'prop-types';
import styles from '../About.module.css';

function Card({ title, desc, children }) {
  return (
    <li className={styles.CommomCard}>
      <div className={styles.carWrapper}>
        <div className={styles.title}>
          <span className={styles.titleText}>{title}</span>
          <div className={styles.subTitleText}>{children}</div>
        </div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </li>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
