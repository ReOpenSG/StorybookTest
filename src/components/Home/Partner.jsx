import React from 'react';

function Partner() {
  return (
    <section className="flex flex-col py-open-3xl tablet:py-open-7xl desktop:py-open-7xl pl-open-gutter-mobile tablet:pl-open-margin-desktop desktop:pl-open-8xl gap-open-2xl tablet:gap-open-5xl desktop:gap-open-5xl">
      <h3 className="sr-only">Partner</h3>
      <div className="flex flex-col gap-open-xl">
        <p className="flex flex-col desktop:flex-row font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl max-w[265px] tablet:max-w-full desktop:max-w-full ">
          <span>최고기업들이 선택한&nbsp;</span>
          <span>OpenSG</span>
        </p>
        <small className="flex flex-col font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
          <span>최정상 기업들과 함께한 경험으로,</span>
          <span>고객사가 찾는 최적의 솔루션을 제공합니다</span>
        </small>
      </div>

      <div>스와이퍼</div>
    </section>
  );
}

export default Partner;
