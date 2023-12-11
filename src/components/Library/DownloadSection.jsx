import React from 'react';
import styles from '@/components/Library/Library.module.css';
import DownloadCard from './DownloadCard';
import companyProfileKo from '@/assets/library_companyProfile_ko.pdf';
import companyBrochureKo from '@/assets/library_compabyBrochure_ko.pdf';

function DownloadSection() {
  return (
    <div className={styles.sectionWrapper}>
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
