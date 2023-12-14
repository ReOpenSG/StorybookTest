import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';

function FuncChar({ desc }) {
  return (
    <div className={styles.FuncChar}>
      <p className={styles.title}>기능 및 특징</p>
      <ul className={styles.list}>
        {desc.특징 &&
          desc.특징.map((item) => (
            <li key={uuidv4()} className={styles.item}>
              <picture>
                <source media="(max-width: 1023px)" srcSet="http://via.placeholder.com/60x60" />
                <img src="http://via.placeholder.com/120x120" alt="Machines" />
              </picture>
              <span className={styles.itemText}>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

FuncChar.propTypes = {
  desc: PropTypes.shape({
    설명: PropTypes.string.isRequired,
    특징: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FuncChar;
