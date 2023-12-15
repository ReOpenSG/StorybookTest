import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import Image1 from '@/assets/home_industry1.png';

function Industries() {
  const industryData = [
    {
      id: uuid(),
      img: Image1,
      title: 'Secondary Battery',
      route: 'battery',
    },
    {
      id: uuid(),
      img: Image1,
      title: 'Display',
      route: 'display',
    },
    {
      id: uuid(),
      img: Image1,
      title: 'Port',
      route: 'port',
    },
    {
      id: uuid(),
      img: Image1,
      title: 'Semi-conductor',
      route: 'semiconductor',
    },
  ];
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

      <div className="w-full flex flex-col justify-center h-[288px] tablet:h-[650px] desktop:h-[650px] bg-black rounded-l-[30px] overflow-hidden">
        <div className="w-full h-fit flex py-open-xl pl-open-xl gap-open-gutter-desktop tablet:py-open-2xl desktop:py-open-2xl tablet:pl-open-5xl desktop:pl-open-5xl tablet:gap-open-margin-desktop desktop:gap-open-margin-desktop">
          {industryData.map((item) => (
            <Link to={`/industries/${item.route}`}>
              <div
                key={item.id}
                className=" flex w-open-6xl tablet:w-open-8xl desktop:w-open-8xl gap-open-lg tablet:gap-open-lg desktop:gap-open-lg flex-col items-center transform opacity-80 active:opacity-100 transition-all duration-300 hover:opacity-100 hover:skew-y-0 hover:scale-105 hover:z-10"
              >
                <img
                  src={item.img}
                  alt="industries"
                  className="w-open-6xl tablet:w-open-8xl  desktop:w-open-8xl"
                />
                <p className="font-open-label text-open-font-small tablet:text-open-font-xl desktop:text-open-font-xl -text--openfoundation-white pt-4 tablet:pt-open-xl desktop:pt-open-xl break-words">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
