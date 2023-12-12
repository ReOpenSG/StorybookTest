import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Desc({ data, id, currentLocation }) {
  const [desc, setDesct] = useState({});

  useEffect(() => {
    if (data && Object.values(data).length > 0) {
      setDesct(Object.values(data)[0][id]);
    }
  }, [data, id]);

  return (
    <div className="desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile flex flex-col gap-open-xl desktop:py-open-5xl tablet:py-open-5xl py-open-3xl">
      <h3
        className={`font-open-heading desktop:text-open-font-xxxl tablet:text-open-font-xxxl text-open-font-xl ${
          currentLocation === 'devices' ? 'text-center' : ''
        }`}
      >
        {Object.keys(data)[0]}
        <span> - </span>
        {id}
      </h3>
      <div className="flex flex-wrap gap-open-xl justify-center  desktop:gap-x-open-margin-desktop tablet:gap-x-open-margin-desktop gap-x-open-margin-mobile">
        <div className="flex justify-center items-center mobile:w-full -bg--open-gray-50 p-open-xl rounded-[20px]">
          <picture>
            <source media="(max-width: 1023px)" srcSet="http://via.placeholder.com/200x150" />
            <img
              src="http://via.placeholder.com/400x300"
              alt="Machines"
              className="w-ful h-[150px]l"
            />
          </picture>
        </div>
        <div className="flex-1 min-w-[288px]">
          {desc.설명 && (
            <p
              key={uuidv4()}
              className="font-open-paragraph desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-medium"
            >
              {desc.설명}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Desc;
