import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';

function Desc({ desc, id, currentLocation }) {
  return (
    <div className={styles.Desc}>
      <h3 className={`${styles.title} ${currentLocation === 'devices' ? 'text-center' : ''}`}>
        {desc.제품}
        <span> - </span>
        {id}
      </h3>
      <div className={styles.descContentsWrapper}>
        <div className={styles.imgWrapper}>
          <picture>
            <source media="(max-width: 1023px)" srcSet="http://via.placeholder.com/200x150" />
            <img src="http://via.placeholder.com/400x300" alt="Machines" />
          </picture>
        </div>
        <div className={styles.textWrapper}>
          {desc.설명 && (
            <p key={uuidv4()} className={styles.description}>
              {desc.설명}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

Desc.propTypes = {
  desc: PropTypes.shape({
    설명: PropTypes.string.isRequired,
    특징: PropTypes.arrayOf(PropTypes.string).isRequired,
    제품: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default Desc;
