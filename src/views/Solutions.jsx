import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Data from '@/data/solutionsData.json';
import Lnb from '@/components/Solutions/Lnb';
import SoultionBanner from '@/components/Solutions/SoultionBanner';
import Char from '@/components/Solutions/Char';
import Snb from '@/components/Solutions/Snb';
import Func from '@/components/Solutions/Func';
import Effect from '@/components/Solutions/Effect';

function Solutions() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const LnbData = {
    array: data.map((item) => item[0]),
    current: id,
    prev: Data[id].솔루션,
  };

  const [refChar, inViewChar] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refFunc, inViewFunc] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [refEffect, inViewEffect] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    const filteredData = Object.entries(Data).filter(
      (item) => item[1].솔루션.trim() === Data[id].솔루션.trim(),
    );
    setData(filteredData);
  }, [id]);

  return (
    <section className="b-[100px] w-full h-full desktop:px-[64px] tablet:px-[64px] px-[16px]">
      <h2 className="sr-only">솔루션별 페이지</h2>
      <Lnb LnbArray={LnbData.array} />
      <SoultionBanner currentLocation={LnbData.current} prevLocation={LnbData.prev} />
      <div className="flex justify-center">
        <div className="w-full max-w-[1320px] flex desktop:gap-[36px] tablet:gap-[36px]">
          <Snb inViewChar={inViewChar} inViewFunc={inViewFunc} inViewEffect={inViewEffect} />
          <div className="flex flex-col">
            <Char refs={refChar} currentLocation={LnbData.current} data={Data} />
            <Func refs={refFunc} currentLocation={LnbData.current} data={Data} />
            <Effect refs={refEffect} currentLocation={LnbData.current} data={Data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
