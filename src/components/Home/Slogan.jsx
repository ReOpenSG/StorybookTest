import React from 'react';

function Slogan() {
  return (
    <section className="w-full flex justify-center mx-auto py-open-4xl tablet:py-open-5xl desktop:py-open-5xl -bg--openfoundation-black max-w-[1320px]">
      <div className="w-full flex flex-col items-center tablet:items-stretch desktop:items-stretch  gap-open-xl tablet:gap-open-3xl desktop:gap-open-3xl ">
        <h3 className="block -text--openfoundation-white font-open-heading text-open-font-xxxl tablet:text-open-font-xxxxxl desktop:text-open-font-xxxxxl">
          OPEN Your Future
          <br />
          with&nbsp;
          <span
            className="inline-block
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2"
          >
            OpenSG
          </span>
        </h3>
        <small className=" -text--openfoundation-white  font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
          고객에게 열려있는 기업, 고객의 미래를 여는 기업
          <br />
          OpenSG 가 고객과 함께 미래로 가는 길을 엽니다
        </small>
      </div>
      <div className="hidden tablet:block desktop:block">이미지</div>
    </section>
  );
}

export default Slogan;
