import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';

function FuncChar({ data, id }) {
  const [desc, setDesct] = useState({});

  useEffect(() => {
    if (data && Object.values(data).length > 0) {
      setDesct(Object.values(data)[0][id]);
    }
  }, [data, id]);

  return (
    <div className={styles.FuncChar}>
      <h3 className={styles.title}>기능 및 특징</h3>
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
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.shape({
        설명: PropTypes.string.isRequired,
        특징: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default FuncChar;
