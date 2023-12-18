import React from 'react';
import PropTypes from 'prop-types';
import styles from './Team.module.css';

function RoleCard({
  src, alt, title, text,
}) {
  return (
    <div className={styles.cardWrapper}>
      <img src={src} alt={alt} aria-hidden="true" className={styles.iconStyle} />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

RoleCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RoleCard;
