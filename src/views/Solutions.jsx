import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lnb from '../components/Solutions/Lnb';
import Data from '../data/solutionsData.json';
import SoultionBanner from '../components/Solutions/SoultionBanner';
import Char from '../components/Solutions/Char';

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
    <section className="max-w-[1320px] mt-[200px] w-screen h-full desktop:px-[64px] tablet:px-[64px] px-[16px]">
      <Lnb LnbArray={LnbData.array} />
      <SoultionBanner currentLocation={LnbData.current} prevLocation={LnbData.prev} />
      <div className="bg-red-300 flex desktop:gap-[80px] tablet:gap-[36px]">
        <aside className="desktop:block tablet:block hidden">
          <nav>
            <ul>
              <li>
                <a href="#Char">제품 및 특징</a>
              </li>
              <li>
                <a href="#Func">기능</a>
              </li>
              <li>
                <a href="#Effect">기대 효과</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div>
          <Char currentLocation={LnbData.current} data={Data} />
          {/* <section>
            <h2>기능</h2>
            <ul>
              {Data[id].기능.map((item, index) => (
                <li key={item}>
                  {index + 1}
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>기대효과</h2>
            <ul>
              {Data[id].기대효과.map((item, index) => (
                <li key={item}>
                  {index + 1}
                  {item}
                </li>
              ))}
            </ul>
          </section> */}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
