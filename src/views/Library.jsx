import React from 'react';
import LibraryTitleSection from '@/components/Library/LibraryTitleSection';
import DownloadSection from '@/components/Library/DownloadSection';

function Library() {
  return (
    <div className="w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop">
      <LibraryTitleSection />
      <DownloadSection />
    </div>
  );
}

export default Library;
