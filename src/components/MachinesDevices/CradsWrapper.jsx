import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';

function CradsWrapper({ data, currentLocation }) {
  return (
    <nav className="flex flex-wrap w-full max-w-[1320px] desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop gap-open-gutter-mobile desktop:py-open-2xl tablet:py-open-2xl py-open-xl">
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
