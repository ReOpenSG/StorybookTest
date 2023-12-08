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
    <fieldset className="flex flex-row gap-open-lg tablet:gap-open-xl desktop:gap-open-xl">
      <h3 className={styles.label}>문의유형</h3>

      <div className="flex flex-wrap gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop grow">
        {data.map((list) => (
          <InquiryInput
            key={list.id}
            id={list.id}
            name="type"
            defaultValue={list.defaultValue}
            onClick={() => null}
            labelText={list.defaultValue}
            img={list.blackIcon}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default InquiryType;
