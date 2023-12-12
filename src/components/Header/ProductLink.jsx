import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@/components/Header/Header.module.css';

function ProductLink({ productName, productTooltip }) {
  return (
    <li>
      <Link to="/solutions/ACS" className={styles.productLink}>
        <span className={styles.productTooltip}>
          {productTooltip}
        </span>
        {productName}
      </Link>
    </li>
  );
}

ProductLink.propTypes = {
  productName: PropTypes.string.isRequired,
  productTooltip: PropTypes.string.isRequired,
};

export default ProductLink;
