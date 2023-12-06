import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solutions.module.css';

function Effect({ currentLocation, data, refs }) {
  return (
    <section id="Effect" ref={refs} className={styles.Effect}>
      <h3 className={styles.title}>기대효과</h3>
      <ul className={styles.list}>
        {data &&
          data[currentLocation].기대효과.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
}

Effect.propTypes = {
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

export default Effect;
