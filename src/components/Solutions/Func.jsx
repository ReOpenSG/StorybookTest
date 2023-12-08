import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Solutions.module.css';

function Func({ currentLocation, data, refs }) {
  return (
    <section id="Func" ref={refs} className={styles.Func}>
      <h3 className={styles.title}>기능</h3>
      <div className={styles.imageWrapper}>
        <img src="http://via.placeholder.com/1320x200" className={styles.image} alt="솔루션 기능" />
      </div>
      <ul className={styles.list}>
        {data &&
          data[currentLocation].기능.map((item) => (
            <li key={uuidv4()} className={styles.item}>
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

Func.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  data: PropTypes.objectOf(
    PropTypes.shape({
      솔루션: PropTypes.string,
      제품명: PropTypes.string,
      제품설명: PropTypes.string,
      특징: PropTypes.arrayOf(PropTypes.string),
      기능: PropTypes.arrayOf(PropTypes.string),
      기대효과: PropTypes.arrayOf(PropTypes.string),
      산업군: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Func;
