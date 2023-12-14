import React from 'react';
import InquiryInput from './InquiryInput';
import { data } from '@/data/contactData';
import styles from './Contact.module.css';

function InquiryType() {
  return (
    <fieldset className={styles.inquiryWrapper}>
      <h4 className={styles.label}>문의유형</h4>
      <div>
        {data.map(({ id, defaultValue }) => (
          <InquiryInput
            key={id}
            type="radio"
            id={id}
            name="type"
            defaultValue={defaultValue}
            onClick={() => null}
            labelText={defaultValue}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default InquiryType;
