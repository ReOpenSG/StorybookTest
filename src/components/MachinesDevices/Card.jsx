import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';

function Card({ title, subTitle, currentLocation }) {
  return (
    <NavLink to={`/${currentLocation}/${subTitle}`} className={styles.Card}>
      <div className={styles.linkTextWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subTitle}</p>
      </div>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default Card;
