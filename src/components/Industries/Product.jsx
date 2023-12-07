import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import styles from './Industries.module.css';

function Product({ industryProducts, refs }) {
  return (
    <section id="Product" ref={refs} className={styles.Product}>
      <h3 className={styles.ProductTitle}>관련 제품</h3>
      <div className={styles.ProductWrapper}>
        {Object.entries(industryProducts).map((item) => (
          <Link key={uuidv4()} to={`/solutions/${item[0]}`} className={styles.ProductLink}>
            <div className={styles.linkWrapper}>
              <div className={styles.image}>
                <img src="http://via.placeholder.com/200x250" alt="제픔 사진" />
              </div>
              <ul className={styles.list}>
                <li className={styles.itemName}>{item[0]}</li>
                <li className={styles.itemSubName}>{item[1].제품명}</li>
                <li className={styles.itemDesc}>{item[1].제품설명}</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

Product.propTypes = {
  industryProducts: PropTypes.oneOfType([PropTypes.object]).isRequired,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Product;
