import React from 'react';
import HistorySwiper from '@/components/History/HistorySwiper';
import TitleSection from '@/components/Common/TitleSection';

function History() {
  return (
    <div className="w-full">
      <TitleSection
        category="연혁"
        title="OPENSG가 걸어온 길"
        background="bg-[url('@/assets/aboutUs_background.svg')]"
        textAlign="text-center"
      />
      <div>
        <HistorySwiper />
      </div>
    </div>
  );
}
export default History;
