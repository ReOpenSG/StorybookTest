import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './MachinesDevices.module.css';
import C060D from '@/assets/machines_C060D.png';
import C100D from '@/assets/machines_C100D.png';
import C200 from '@/assets/machines_C200.png';
import C300 from '@/assets/machines_C300.png';
import ForkLift from '@/assets/machines_Fork-Lift Type.png';
import FoupType from '@/assets/machines_Foup Type.png';
import L300 from '@/assets/machines_L300.png';
import L1000 from '@/assets/machines_L1000.png';
import P200 from '@/assets/machines_P200.png';

function Desc({ descProps, id, currentLocation, selectedProduct, setSelectedProduct }) {
  useEffect(() => {
    if (descProps && Object.values(descProps).length > 0) {
      setSelectedProduct(Object.keys(descProps.types)[0]);
    }
  }, [descProps, setSelectedProduct]);

  function clickProduct(e) {
    setSelectedProduct(e.target.value);
  }
  const imageMap = {
    'C060D CE': C060D,
    'C100D CE': C100D,
    C200,
    C300,
    F150A: ForkLift,
    OW12: FoupType,
    L300,
    L1000,
    P200,
  };
  const selectedProductImage = imageMap[selectedProduct];

  return (
    <div className={styles.Desc}>
      <h3 className={`${styles.title} ${currentLocation === 'devices' ? 'text-center' : ''}`}>
        {descProps.product}
        <span> - </span>
        {id}
      </h3>
      <ul className={styles.buttonList}>
        {descProps.types &&
          Object.keys(descProps.types).map((item) => (
            <li key={uuidv4()}>
              <button
                type="button"
                value={item}
                onClick={clickProduct}
                className={`${selectedProduct === item ? styles.isClicked : ''} ${styles.button}`}
              >
                {item}
              </button>
            </li>
          ))}
      </ul>
      <div className={styles.descContentsWrapper}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgWrapper}>
            {selectedProductImage && (
              <img src={selectedProductImage} alt="Machines" className={styles.img} />
            )}
          </div>
        </div>
        <div className={styles.textWrapper}>
          <ul>
            {descProps.types &&
              descProps.types[selectedProduct]?.desc.map((item) => (
                <li key={uuidv4()} className={styles.description}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Desc.propTypes = {
  descProps: PropTypes.shape({
    types: PropTypes.objectOf(
      PropTypes.shape({
        char: PropTypes.arrayOf(PropTypes.string),
        desc: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    product: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
  selectedProduct: PropTypes.string,
  setSelectedProduct: PropTypes.func.isRequired,
};

Desc.defaultProps = {
  selectedProduct: '',
};

export default Desc;
