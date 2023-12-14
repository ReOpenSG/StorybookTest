import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/location_defaultImage.png';

function LocationContainer({
  locationName,
  locationAddress,
  locationTel,
  locationFax,
  locationImage,
}) {
  return (
    <div className="locationWrapper flex flex-row justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop pt-open-5xl desktop:pt-open-6xl tablet:pt-open-6xl">
      <div><img className="desktop:w-[400px] desktop:h-[400px] tablet:w-[400px] tablet:h-[400px] w-[200px] h-[200px] object-cover" src={locationImage} alt="본사 전경" /></div>
      <address className="desktop:w-[500px] tablet:w-[500px] w-[250px] flex flex-col gap-open-md desktop:gap-open-xl tablet:gap-open-xl desktop:text-open-font-large desktop:font-open-label tablet:text-open-font-large tablet:font-open-label text-open-font-medium font-open-paragraph not-italic">
        <p className="desktop:text-open-font-xl desktop:font-open-heading tablet:text-open-font-xl tablet:font-open-heading text-open-font-medium font-open-label">{locationName}</p>
        <p>{locationAddress}</p>
        <div className="flex flex-col gap-open-md">
          <p>
            Tel.
            {locationTel}
          </p>
          <p>
            Fax.
            {locationFax}
          </p>
        </div>
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
};

LocationContainer.defaultProps = {
  locationImage: defaultImage,
}

export default LocationContainer;
