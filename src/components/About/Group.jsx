import React from 'react';
import Title from './Common/Title';

function Group() {
  return (
    <section className="w-full flex flex-col items-center -bg--openfoundation-primary -text--openfoundation-secondary desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile desktop:py-open-7xl tablet:py-open-7xl py-open-margin-desktop">
      <Title title="WHAT WE DO" subtitle="Open Solution Group">
        <p className="flex flex-col font-open-heading desktop:text-open-font-xxl tablet:text-open-font-xxl text-open-font-medium">
          <span>고객이 원하는 성과창출에</span>
          <span>기여 할 수 있는 최고의 파트너</span>
        </p>
      </Title>
    </section>
  );
}

export default Group;
