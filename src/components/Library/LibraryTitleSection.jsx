import React from 'react';
import LibraryTitleInner from './LibraryTitleInner';

function LibraryTitleSection() {
  return (
    <div className="flex flex-col gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl text-center my-[60px] tablet:my-open-6xl desktop:my-open-6xl">
      <LibraryTitleInner category="Support" title="라이브러리" />
    </div>
  );
}

export default LibraryTitleSection;
