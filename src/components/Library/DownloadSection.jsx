import React from 'react';
import DownloadCard from './DownloadCard';
import companyProfileKo from '@/assets/library_companyProfile_ko.pdf';
import companyProfileEn from '@/assets/library_companyProfile_en.pdf';
import companyBrochureKo from '@/assets/library_compabyBrochure_ko.pdf';
import companyBrochureEn from '@/assets/library_companyBrochure_en.pdf';

function DownloadSection() {
  return (
    <div className="flex flex-wrap justify-center gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop grow m-open-xl tablet:m-open-5xl desktop:m-open-5xl">
      <DownloadCard
        text="회사 소개서"
        category="소개서"
        koHref={companyProfileKo}
        koDownload="OPENSG_회사_소개서_국문"
        koAriaLabel="OPENSG 회사 소개서 국문"
        enHref={companyProfileEn}
        enDownload="OPENSG_회사_소개서_영문"
        enAriaLabel="OPENSG 회사 소개서 영문"
      />
      <DownloadCard
        text="회사 브로슈어"
        category="브로슈어"
        koHref={companyBrochureKo}
        koDownload="OPENSG_회사_브로슈어_국문"
        koAriaLabel="OPENSG 회사 브로슈어 국문"
        enHref={companyBrochureEn}
        enDownload="OPENSG_회사_브로슈어_영문"
        enAriaLabel="OPENSG 회사 브로슈어 영문"
      />
    </div>
  );
}

export default DownloadSection;
