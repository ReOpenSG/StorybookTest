import React from 'react';
import HistorySwiper from '@/components/History/HistorySwiper';
import HistoryMobile from '@/components/History/HistoryMobile';
import historyData from '../../historyData.json';

function History() {
  return (
    <>
      <HistorySwiper historyData={historyData} />
      <HistoryMobile historyData={historyData} />
    </>
  );
}
export default History;
