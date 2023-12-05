import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lnb from '../components/Solutions/Lnb';
import Data from '../data/solutionsData.json';
import SoultionBanner from '../components/Solutions/SoultionBanner';
import Char from '../components/Solutions/Char';
import Snb from '../components/Solutions/Snb';
import Func from '../components/Solutions/Func';
import Effect from '../components/Solutions/Effect';

function Solutions() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const LnbData = {
    array: data.map((item) => item[0]),
    current: id,
    prev: Data[id].솔루션,
  };

  useEffect(() => {
    const filteredData = Object.entries(Data).filter(
      (item) => item[1].솔루션.trim() === Data[id].솔루션.trim(),
    );
    setData(filteredData);
  }, [id]);

  return (
    <section className="mt-[200px] b-[100px] w-full h-full desktop:px-[64px] tablet:px-[64px] px-[16px]">
      <h2 className="sr-only">솔루션별 페이지</h2>
      <Lnb LnbArray={LnbData.array} />
      <SoultionBanner currentLocation={LnbData.current} prevLocation={LnbData.prev} />
      <div className="flex justify-center py-[20px]">
        <div className="w-full max-w-[1320px] flex desktop:gap-[80px] tablet:gap-[36px]">
          <Snb />
          <div>
            <p className="font-open-label desktop:text-open-font-large tablet:text-open-font-large text-open-font-medium mb-[10px]">
              Open
              {LnbData.current}
            </p>
            <div className="flex flex-col desktop:gap-[100px] tablet:gap-[100px] gap-[50px]">
              <Char currentLocation={LnbData.current} data={Data} />
              <Func currentLocation={LnbData.current} data={Data} />
              <Effect currentLocation={LnbData.current} data={Data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
