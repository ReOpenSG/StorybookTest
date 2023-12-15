import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '@/assets/location_defaultImage.png';
import linkIcon from '@/assets/location_link.svg';

function LocationContainer({
  locationName,
  locationAddress,
  locationTel,
  locationFax,
  locationImage,
  locationLink,
}) {
  return (
    <div className="locationWrapper flex flex-row justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop pt-open-5xl desktop:pt-open-6xl tablet:pt-open-6xl">
      <div><img className="desktop:w-[400px] desktop:h-[400px] tablet:w-[400px] tablet:h-[400px] w-[200px] h-[200px] object-cover" src={locationImage} alt="본사 전경" /></div>
      <address className="desktop:w-[500px] tablet:w-[500px] w-[250px] flex flex-col justify-between h-full desktop:gap-open-xl tablet:gap-open-xl desktop:text-open-font-large desktop:font-open-label tablet:text-open-font-large tablet:font-open-label text-open-font-medium font-open-paragraph not-italic desktop:py-open-gutter-desktop tablet:py-open-gutter-desktop py-open-gutter-mobile">
        <div className="informationWrapper flex flex-col gap-open-md">
          <p className="desktop:text-open-font-xl desktop:font-open-heading tablet:text-open-font-xl tablet:font-open-heading text-open-font-medium font-open-label">{locationName}</p>
          <p>{locationAddress}</p>
          <div className="flex flex-col gap-open-md">
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
        <div className="linkWrapper">
          <a href={locationLink} target="_blank" rel="noreferrer">
            <img className="w-[32px] h-[32px] desktop:w-[64px] desktop:h-[64px] tablet:w-[64px] tablet:h-[64px]" src={linkIcon} alt="지도 링크" />
          </a>
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
  locationLink: PropTypes.string.isRequired,
};

LocationContainer.defaultProps = {
  locationImage: defaultImage,
};

export default LocationContainer;
