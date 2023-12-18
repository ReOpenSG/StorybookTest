import React from 'react';
import Keywords from './Keywords';
import BgImg from '@/assets/home_universe.png';

function Universe() {
  return (
    <section
      className="flex flex-col justify-center items-center py-open-4xl tablet:py-open-5xl desktop:py-open-5xl gap-open-4xl tablet:gap-open-5xl desktop:gap-open-5xl -bg--openfoundation-black bg-cover"
      style={{ backgroundImage: `url('${BgImg}')` }}
    >
      <div className="flex flex-col items-center -text--openfoundation-white gap-open-lg tablet:gap-open-xl desktop:gap-open-xl">
        <p className="font-open-highlight text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl">
          Explore OpenSG
        </p>
        <h3 className="font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl">
          OPENSG의 세계관을 만나보세요
        </h3>
      </div>
      <Keywords />
    </section>
  );
}

export default Universe;
