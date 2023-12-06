import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Controller, EffectCoverflow, Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import YearSlide from '@/components/History/YearSlide';
import HistorySlide from '@/components/History/HistorySlide';
import historyData from '../../historyData.json';

function History() {
  // 연도 Swiper 와 카드 Swiper 가 움직일 때 마다 함께 연동되도록 controller 설정을 하기 위한 상태 관리
  const [yearSwiper, setYearSwiper] = useState(null);
  const [cardSwiper, setCardSwiper] = useState(null);

  // 연혁 내림차순으로 정렬
  const historyDataSorted = Object.entries(historyData).sort((a, b) => b[0] - a[0]);

  return (
    <div className="flex justify-center items-center w-full h-full -bg--openfoundation-primary">
      <section className="w-[1320px] h-full flex flex-col font-open-font items-center justify-center gap-[100px] -text--openfoundation-secondary font-open-label -bg--openfoundation-primary">
        {/* 연도 Swiper */}
        <Swiper
          mousewheel
          centeredSlides
          modules={[Controller, EffectCoverflow, Mousewheel]}
          effect="coverflow"
          slidesPerView={7}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: true,
          }}
          onSwiper={setYearSwiper}
          controller={{ by: 'container', control: cardSwiper }}
          className="w-full h-[200px] text-open-font-xxxl text-center flex flex-col justify-center items-center"
        >
          {historyDataSorted.map(([key]) => (
            <SwiperSlide className="flex flex-col justify-end items-center">
              {({ isActive }) => (
                <YearSlide isActive={isActive} year={key} />
              )}
            </SwiperSlide>
          ))}

        </Swiper>
        {/* 카드 Swiper */}
        <Swiper
          mousewheel
          centeredSlides
          modules={[Controller, EffectCoverflow, Mousewheel]}
          effect="coverflow"
          slidesPerView={3}
          coverflowEffect={{
            rotate: 20,
            scale: 0.7,
          }}
          onSwiper={setCardSwiper}
          controller={{ by: 'container', control: yearSwiper }}
          className="w-full h-full flex flex-col justify-start items-start"
        >
          {historyDataSorted.map(([key, value]) => (
            <SwiperSlide className="rounded-[20px]">
              {({ isActive }) => (
                <HistorySlide isActive={isActive} year={key} history={value} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
export default History;
