import React from 'react';
import Palette from './Common/Palette';

function Ci() {
  return (
    <section className="flex flex-col items-center desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile desktop:py-open-7xl tablet:py-open-7xl py-open-margin-desktop">
      <div className="max-w-[1320px] w-full flex flex-col desktop:gap-open-5xl tablet:gap-open-5xl gap-open-2xl">
        <h3 className="font-open-heading desktop:text-open-font-xxxxl tablet:text-open-font-xxxxl text-open-font-large text-[#0071E3]">
          CI
        </h3>
        <p className="font-open-label desktop:text-open-font-xl tablet:text-open-font-xl text-open-font-medium">
          OpenSG의 ‘SG’는 ‘Solution Group’의 약자를 상징합니다.
          <br />
          상호 간의 신뢰와 협업을 상징하는 블루 컬러를 메인으로
          <br />
          로고 하단의 회색 그라디언트는 구성원 모두가 조직의 성공이라는 지향점을 향한다는 의미를
          담고 있습니다.
        </p>
        <ul className="flex desktop:flex-row tablet:flex-row flex-col flex-wrap font-open-label -text--openfoundation-secondary desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium">
          <Palette
            rgb="R 6 / G 64 / B 108"
            cmyk="C 98 / M 82 / Y 41 / K 6"
            hex="#06406C"
            roundedLeft
          />
          <Palette rgb="R 76 / G 140 / B 200" cmyk="C 70 / M 36 / Y 2 / K" hex="#4C8CC8" />
          <Palette
            rgb="R 201 / G 202 / B 203"
            cmyk="C 0 / M 0 / Y 0 / K 30"
            hex="#C9CACB"
            roundedRight
          />
        </ul>
      </div>
      <div className="w-full max-w-[1320px] mt-open-2xl flex justify-end">
        <img src="/ci.png" alt="CI 로고" className="desktop:w-[440px] tablet:w-[440px] w-[200px]" />
      </div>
    </section>
  );
}

export default Ci;
