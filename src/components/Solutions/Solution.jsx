import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LNB from './LNB';
import Data from '../../data/solutionsData.json';
import Banner from './Banner';

export default function Solution() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = Object.entries(Data).filter(
      (item) => item[1].솔루션.trim() === Data[id].솔루션.trim(),
    );
    setData(filteredData);
  }, [id]);

  return (
    <section>
      <LNB data={data} />
      <p>
        {Data[id].솔루션}
        &nbsp;&gt;&nbsp;
        {id}
      </p>
      <Banner />
    </section>
  );
}
