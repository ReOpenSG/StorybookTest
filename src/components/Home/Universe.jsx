import React from 'react';

function Universe() {
  return (
    <section className="flex flex-col justify-center items-center py-open-4xl tablet:py-open-5xl desktop:py-open-5xl gap-open-4xl tablet:gap-open-5xl desktop:gap-open-5xl">
      <div className="flex flex-col items-center -text--openfoundation-white gap-open-lg tablet:gap-open-xl desktop:gap-open-xl">
        <p className="font-open-highlight text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl">
          Explore OpenSG
        </p>
        <h3 className="font-open-heading text-open-font-xl tablet:text-open-font-xxxl desktop:text-open-font-xxxl">
          OPENSG의 세계관을 만나보세요
        </h3>
      </div>
      <div>태그 캔버스</div>
    </section>
  );
}

export default Universe;
