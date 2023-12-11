import React from 'react';
import styles from '@/components/Library/Library.module.css';
import LibraryTitleInner from './LibraryTitleInner';

function LibraryTitleSection() {
  return (
    <div className={styles.titleWrapper}>
      <LibraryTitleInner category="Support" title="라이브러리" />
    </div>
  );
}

export default LibraryTitleSection;
