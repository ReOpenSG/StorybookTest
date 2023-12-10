import React from 'react';
import InquiryInput from './InquiryInput';
import { data } from '@/data/contactData';
import styles from '@/components/contact/Contact.module.css';

function InquiryType() {
  // const [productStatus, setProductStatus] = useState(false);
  // const [purchaseStatus, setPurchaseStatus] = useState(false);
  // const [asStatus, setAsStatus] = useState(false);
  // const [etcStatus, setEtcStatus] = useState(false);

  return (
    <fieldset className="flex flex-row gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl">
      <h3 className={styles.label}>문의유형</h3>
      <div className="flex flex-wrap gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop flex-1">
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
