import React from 'react';
import LibraryTitleSection from '@/components/Library/LibraryTitleSection';
import DownloadSection from '@/components/Library/DownloadSection';

function Library() {
  return (
    <div className="w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop">
      <div className="max-w-[1320px] m-auto w-full">
        <LibraryTitleSection category="Support" title="라이브러리" />
        <DownloadSection />
      </div>
    </div>
  );
}

export default Library;
