import React from 'react';

function Industries() {
  return (
    <section className="flex flex-col ml-auto gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl py-open-5xl tablet:py-open-7xl desktop:py-open-7xl pl-open-gutter-mobile tablet:pl-open-margin-desktop desktop:pl-open-8xl">
      <div className="flex flex-col gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl">
        <h3 className="-text--openfoundation-black font-open-heading text-start text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl">
          Industries
        </h3>
        <div className="flex flex-col  gap-open-lg">
          <p
            className="max-w-[287px] tablet:max-w-full desktop:max-w-full flex tablet:flex-col font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl  desktop:text-open-font-xxxxl
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2"
          >
            다양한 산업군에서 빛나는 OpenSG
          </p>
          <small className="font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
            OpenSG 제품의 무한한 가능성을 경험하세요.
          </small>
        </div>
      </div>

      <div className="h-[288px] tablet:h-[650px] desktop:h-[650px] w-full bg-black" />
    </section>
  );
}

export default Industries;
