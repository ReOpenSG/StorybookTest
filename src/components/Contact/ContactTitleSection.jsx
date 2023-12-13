import React from 'react';
import styles from './Contact.module.css';
import ContactTitleInner from './ContactTitleInner';

function ContactTitleSection() {
  return (
    <div className={styles.titleWrapper}>
      <ContactTitleInner
        category="Support"
        title="고객문의"
        desc="상세하게 작성해 주시면 더 빠르게 답변드릴 수 있습니다."
      />
    </div>
  );
}

export default ContactTitleSection;
