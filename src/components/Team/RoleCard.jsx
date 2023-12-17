import React from 'react';
import PropTypes from 'prop-types';
import styles from './Team.module.css';
import TeamIcon from './TeamIcon';

function RoleCard({ title, text }) {
  return (
    <div className={styles.cardWrapper}>
      <TeamIcon />
      <div>
        <h4>
          {title}
        </h4>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

RoleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default RoleCard;
