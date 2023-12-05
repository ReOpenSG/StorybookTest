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
    <section className="h-full mt-[200px]">
      <Lnb LnbArray={LnbData.array} />
      <SoultionBanner currentLocation={LnbData.current} prevLocation={LnbData.prev} />
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
    </section>
  );
}

export default Solutions;
