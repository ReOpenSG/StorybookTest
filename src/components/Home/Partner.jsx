import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import { Autoplay } from 'swiper/modules';
import Image1 from '@/assets/home_partner1.png';
import Image2 from '@/assets/home_partner2.png';
import Image3 from '@/assets/home_partner3.png';
import styles from './Home.module.css';

function Partner() {
  const partnerData = [
    {
      id: uuid(),
      img: Image1,
    },
    {
      id: uuid(),
      img: Image2,
    },
    {
      id: uuid(),
      img: Image3,
    },
    {
      id: uuid(),
      img: Image1,
    },
    {
      id: uuid(),
      img: Image2,
    },
    {
      id: uuid(),
      img: Image3,
    },
    {
      id: uuid(),
      img: Image1,
    },
    {
      id: uuid(),
      img: Image2,
    },
    {
      id: uuid(),
      img: Image3,
    },
  ];
  return (
    <section className="flex flex-col py-open-3xl tablet:py-open-7xl desktop:py-open-7xl gap-open-2xl tablet:gap-open-5xl desktop:gap-open-5xl">
      <h3 className="sr-only">Partner</h3>
      <div className="flex flex-col gap-open-xl pl-open-gutter-mobile tablet:pl-open-margin-desktop desktop:pl-open-8xl ">
        <p className="flex flex-col desktop:flex-row font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl max-w[265px] tablet:max-w-full desktop:max-w-full ">
          <span>최고기업들이 선택한&nbsp;</span>
          <span>OpenSG</span>
        </p>
        <small className="flex flex-col font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl">
          <span>최정상 기업들과 함께한 경험으로,</span>
          <span>고객사가 찾는 최적의 솔루션을 제공합니다</span>
        </small>
      </div>

      <div className="w-full">
        <Swiper
          className={`mySwiper ${styles.partnerSwiper}`}
          spaceBetween={60}
          slidesPerView="auto"
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          loop
          modules={[Autoplay]}
          speed={5500}
          freeMode
          preventInteractionOnTransition
          autoplay={{
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }}
        >
          {partnerData.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="partner" className="w-300px" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;
