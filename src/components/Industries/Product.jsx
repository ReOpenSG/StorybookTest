import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Industries.module.css';
import imageArray from './importImage.js';

function Product({ industryProducts, headingRef, sectionRef }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section ref={headingRef} id="Product" className={styles.Product}>
      <h4 ref={sectionRef} className={styles.ProductTitle}>
        관련 제품
      </h4>
      <div className={styles.ProductWrapper}>
        {Object.entries(industryProducts).map((item) => (
          <Link key={uuidv4()} to={`/solutions/${item[0]}`} className={styles.ProductLink}>
            <div
              className={styles.linkWrapper}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
            >
              <div className={styles.image}>
                <img src={imageArray[item[0]]} alt="제픔 사진" />
              </div>
              <dl className={styles.list}>
                <dt className={styles.itemName}>Open {item[0]}</dt>
                <dt className={styles.itemSubName}>{item[1].제품명}</dt>
                <dd className={styles.itemDesc}>{item[1].제품설명}</dd>
              </dl>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

Product.propTypes = {
  industryProducts: PropTypes.oneOfType([PropTypes.object]).isRequired,
  headingRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

const MemoizedProduct = React.memo(Product);

export default MemoizedProduct;
