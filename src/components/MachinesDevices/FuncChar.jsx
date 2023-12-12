import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function FuncChar({ data, id }) {
  const [desc, setDesct] = useState({});

  useEffect(() => {
    if (data && Object.values(data).length > 0) {
      setDesct(Object.values(data)[0][id]);
    }
  }, [data, id]);

  return (
    <div className="flex flex-col max-w-[1320px] w-full desktop:py-open-5xl tablet:py-open-5xl py-open-3xl desktop:gap-open-xl tablet:gap-open-xl gap-open-lg">
      <h3 className="font-open-label desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-large">
        기능 및 특징
      </h3>
      <ul className="flex flex-wrap desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop gap-open-gutter-mobile">
        {desc.특징 &&
          desc.특징.map((item) => (
            <li
              key={uuidv4()}
              className="font-open-label desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-medium p-open-2xl -bg--openfoundation-secondary rounded-[20px] flex flex-col flex-1 basis-open-8xl desktop:gap-open-2xl tablet:gap-open-2xl gap-open-xl items-center justify-center"
            >
              <picture>
                <source media="(max-width: 1023px)" srcSet="http://via.placeholder.com/60x60" />
                <img src="http://via.placeholder.com/120x120" alt="Machines" />
              </picture>
              <span className="flex-1">{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

FuncChar.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.shape({
        설명: PropTypes.string.isRequired,
        특징: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ),
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default FuncChar;
