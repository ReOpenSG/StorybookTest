import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/location_defaultImage.png';
import linkIcon from '@/assets/location_link.svg';
import styles from '@/components/Location/Location.module.css';

function LocationContainer({
  locationName,
  locationAddress,
  locationTel,
  locationFax,
  locationImage,
  locationLink,
}) {
  return (
    <div className={styles.locationContainer}>
      <img className={styles.locationImage} src={locationImage} alt="본사 전경" />
      <address className={styles.locationAddress}>
        <div className={styles.locationInfoContainer}>
          <p className={styles.locationName}>{locationName}</p>
          <p>{locationAddress}</p>
          <div className={styles.locationContact}>
            <p>
              Tel. &nbsp;
              {locationTel}
            </p>
            <p>
              Fax. &nbsp;
              {locationFax}
            </p>
          </div>
        </div>
        <a className={styles.locationLink} href={locationLink} target="_blank" rel="noreferrer">
          <img className={styles.linkIcon} src={linkIcon} alt="지도 링크" />
        </a>
      </address>
    </div>
  );
}

LocationContainer.propTypes = {
  locationName: PropTypes.string.isRequired,
  locationAddress: PropTypes.string.isRequired,
  locationTel: PropTypes.string.isRequired,
  locationFax: PropTypes.string.isRequired,
  locationImage: PropTypes.string,
  locationLink: PropTypes.string.isRequired,
};

LocationContainer.defaultProps = {
  locationImage: defaultImage,
};

export default LocationContainer;
