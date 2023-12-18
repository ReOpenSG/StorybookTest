import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import Image1 from '@/assets/home_industry1.png';
import Image2 from '@/assets/home_industry2.png';
import Image3 from '@/assets/home_industry3.png';
import Image4 from '@/assets/home_industry4.png';

function Industries() {
  const industryData = [
    {
      id: uuid(),
      img: Image4,
      enTitle: 'Secondary Battery',
      krTitle: '2차 전지',
      route: 'battery',
    },
    {
      id: uuid(),
      img: Image1,
      enTitle: 'Display',
      krTitle: '디스플레이',
      route: 'display',
    },
    {
      id: uuid(),
      img: Image2,
      enTitle: 'Port',
      krTitle: '항만',
      route: 'port',
    },
    {
      id: uuid(),
      img: Image3,
      enTitle: 'Semi-conductor',
      krTitle: '반도체',
      route: 'semiconductor',
    },
  ];
  return (
    <section className="w-full flex flex-col mx-auto px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl py-open-5xl tablet:py-open-7xl desktop:py-open-7xl max-w-[1320px]">
      <div className="flex flex-col gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl">
        <h3 className="-text--openfoundation-black font-open-heading text-start text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl">
          Industries
        </h3>
        <div className="flex flex-col  gap-open-lg">
          <p
            className="tablet:max-w-full desktop:max-w-full flex flex-col tablet:flex-row desktop:flex-row font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl  desktop:text-open-font-xxxxl
          "
          >
            다양한 산업군에서 빛나는&nbsp;
            <span
              className="bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2"
            >
              OpenSG
            </span>
          </p>
          <small className="font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
            OpenSG 제품의 무한한 가능성을 경험하세요.
          </small>
        </div>
      </div>

      <div className="w-full flex flex-wrap flex-col justify-center rounded-l-[30px] overflow-hidden">
        <div className="w-full flex justify-center items-center tablet:items-stretch desktop:items-stretch  grow flex-wrap py-open-xl gap-open-gutter-mobile tablet:py-open-2xl desktop:py-open-2xl  tablet:gap-open-margin-mobile desktop:gap-open-margin-mobile">
          {industryData.map((item) => (
            <div
              key={item.id}
              className="w-full min-w-[280px] max-w-[705px] flex flex-1 flex-col justify-center tablet:justify-normal desktop:justify-normal flex-wrap bg-cover rounded-[20px] brightness-50 h-[180px] tablet:h-[360px] desktop:h-[360px] gap-open-sm  active:opacity-100 pointerhover:hover:brightness-100 pointerhover:hover:scale-105 hover:z-10 mouse  -text--openfoundation-tertiary hover:-text--openfoundation-white"
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <Link to={`/industries/${item.route}`} className="block p-open-2xl h-full">
                <p className="font-open-paragraph text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large ">
                  {item.krTitle}
                </p>
                <p className="font-open-heading text-open-font-large tablet:text-open-font-xl desktop:text-open-font-xl">
                  {item.enTitle}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
