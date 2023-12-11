import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';

function CradsWrapper({ data, currentLocation }) {
  return (
    <div className="flex flex-wrap w-full desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop gap-open-gutter-mobile desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile">
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
    </div>
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
};

export default CradsWrapper;
