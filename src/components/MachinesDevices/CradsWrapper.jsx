import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './MachinesDevices.module.css';

function CradsWrapper({ data, currentLocation }) {
  return (
    <nav className={styles.CardWrapper}>
      {Object.entries(data).map(([title, types]) =>
        Object.entries(types).map(([subTitle]) => (
          <Card
            key={uuidv4()}
            title={title}
            subTitle={subTitle}
            currentLocation={currentLocation}
          />
        )),
      )}
    </nav>
  );
}

CradsWrapper.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.shape({
        설명: PropTypes.string.isRequired,
        특징: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ),
  ).isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default CradsWrapper;
