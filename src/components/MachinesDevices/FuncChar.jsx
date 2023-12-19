import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';

function FuncChar({ descProps, selectedProduct }) {
  return (
    <div className={styles.FuncChar}>
      <p className={styles.title}>기능 및 특징</p>
      <ul className={styles.list}>
        {descProps.types &&
          descProps.types[selectedProduct]?.char.map((item) => (
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
  descProps: PropTypes.shape({
    types: PropTypes.objectOf(
      PropTypes.shape({
        char: PropTypes.arrayOf(PropTypes.string),
        desc: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    product: PropTypes.string,
  }).isRequired,
  selectedProduct: PropTypes.string,
};

FuncChar.defaultProps = {
  selectedProduct: '',
};

export default FuncChar;
