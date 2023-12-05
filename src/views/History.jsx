import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

function History() {
  // controller 설정을 위한 상태입니다.
  const [yearSwiper, setYearSwiper] = useState(null);
  const [cardSwiper, setCardSwiper] = useState(null);
  return (
    <section className="w-full h-full flex flex-col px-[300px] font-open-font items-center justify-center -bg--openfoundation-primary">
      <div className="historyWrapper w-[1320px] flex flex-col gap-[100px] -text--openfoundation-secondary font-open-label -bg--openfoundation-primary">
        <Swiper
          centeredSlides
          modules={[Controller, EffectCoverflow]}
          effect="coverflow"
          slidesPerView={7}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          onSwiper={setYearSwiper}
          controller={{ by: 'container', control: cardSwiper }}
          className="w-full h-[200px] text-open-font-xxxxl text-center flex flex-col justify-center items-center"
        >
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2023</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2023</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2022</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2022</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2021</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2021</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2020</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2020</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2019</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2019</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-end items-center gap-[20px]">
            {({ isActive }) => (
              isActive ? (
                <>
                  <div>2018</div>
                  <img src="/src/assets/history_circle.svg" alt="" aria-hidden />
                </>
              ) : (
                <>
                  <div className="text-open-font-xxl -text--open-gray-300">2018</div>
                  <img src="/src/assets/history_circleline.svg" alt="" aria-hidden />
                </>
              )
            )}
          </SwiperSlide>
        </Swiper>

        <Swiper
          centeredSlides
          modules={[Controller, EffectCoverflow]}
          effect="coverflow"
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.7,
          }}
          onSwiper={setCardSwiper}
          controller={{ by: 'container', control: yearSwiper }}
          className="w-full h-full"
        >
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2023</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2022</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2021</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2020</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2019</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[582px] py-[120px] px-[40px] -bg--open-gray-950 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-9">
              <span className="text-open-font-xxxxxl">2018</span>
              <ul className="font-open-paragraph text-open-font-xl flex flex-col gap-[20px]">
                <li>경영혁신형 중소기업 Main-biz 인증 획득</li>
                <li>경광등 작동신호 무선 송출기 발명 특허 등록</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

  );
}
export default History;
