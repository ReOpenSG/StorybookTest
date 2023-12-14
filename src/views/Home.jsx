import React from 'react';
import Slogan from '@/components/Home/Slogan';
import Universe from '@/components/Home/Universe';
import Solutions from '@/components/Home/Solutions';
import Products from '@/components/Home/Products';
import Industries from '@/components/Home/Industries';
import Partner from '@/components/Home/Partner';

function Home() {
  return (
    <section className="mb-open-5xl w-full h-full">
      <h2 className="sr-only">메인 페이지</h2>
      <div
        className="w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile -bg--openfoundation-black
      "
      >
        <Slogan />
        <Universe />
        <Solutions />
        <Products />
      </div>
      <div
        className="w-full h-full -bg--openfoundation-white
      "
      >
        <Industries />
        <Partner />
      </div>
    </section>
  );
}

export default Home;
