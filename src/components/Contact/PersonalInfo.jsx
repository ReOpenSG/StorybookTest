import React from 'react';
import styles from './Contact.module.css';
import FillingInput from './FillingInput';

function PersonalInfo() {
  return (
    <fieldset className={styles.personalInfoWrapper}>
      <FillingInput
        labelText="받으실 이메일"
        inputType="email"
        name="email"
        placeholderText="abc@abcd.com"
      />
      <FillingInput
        labelText="받으실 연락처"
        inputType="tel"
        name="tel"
        placeholderText="010-1234-1234"
      />
    </fieldset>
  );
}

export default PersonalInfo;
