import React, { useState } from 'react';
import InquiryInput from './InquiryInput';
import { data } from '@/data/contactData';
import styles from './Contact.module.css';

function InquiryType() {
  const [state, setState] = useState(false);

  const handleRadioClick = () => {
    setState(true);
  };
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
            labelText={defaultValue}
            onClick={handleRadioClick}
            checked={state}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default InquiryType;
