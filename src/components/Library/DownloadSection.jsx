import React from 'react';
import DownloadCard from './DownloadCard';
import companyProfileKo from '@/assets/library_companyProfile_ko.pdf';
import companyBrochureKo from '@/assets/library_compabyBrochure_ko.pdf';

function DownloadSection() {
  return (
    <div className="flex flex-wrap justify-center gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop grow m-open-xl tablet:m-open-5xl desktop:m-open-5xl">
      <DownloadCard
        text="회사 소개서"
        category="소개서"
        href={companyProfileKo}
        download="OPENSG_회사_소개서_국문"
        ariaLabel="OPENSG 회사 소개서 국문"
      />
      <DownloadCard
        text="회사 브로슈어"
        category="브로슈어"
        href={companyBrochureKo}
        download="OPENSG_회사_브로슈어_국문"
        ariaLabel="OPENSG 회사 브로슈어 국문"
      />
    </div>
  );
}

export default DownloadSection;
