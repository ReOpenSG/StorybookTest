import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function Char({ currentLocation, data, refs }) {
  return (
    <section id="Char" ref={refs} className={styles.Char}>
      <span className={styles.subTitle}>
        Open
        {currentLocation}
      </span>
      <h3 className={styles.title}>제품 및 특징</h3>
      <div className={styles.container}>
        <p className={styles.containerTitle}>제품</p>
        <p className={styles.product}>{data && data[currentLocation].제품설명}</p>
      </div>
      <div className={styles.container}>
        <p className={styles.containerTitle}>특징</p>
        <ul className={styles.charList}>
          {data &&
            data[currentLocation].특징.map((item) => (
              <li key={item} className={styles.charItem}>
                <p className={styles.charItemTitle}>특징 제목</p>
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

Char.propTypes = {
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

export default Char;
