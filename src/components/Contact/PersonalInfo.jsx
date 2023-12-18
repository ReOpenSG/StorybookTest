import React, { useState } from 'react';
import styles from './Contact.module.css';
import FillingInput from './FillingInput';
import { debounce } from '@/utils/debounce';

function PersonalInfo() {
  const [telValue, setTelValue] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const telValueReplace = telValue.replace(/-/g, '');
  const numCheck = /^[0-9]+$/;

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
        maxLength="13"
        value={telNumber}
        onChange={debounce((e) => {
          setTelValue(e.target.value);
        }, 300)}
        onInput={(e) => {
          setTelNumber(e.target.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }}
      />
      {numCheck.test(telValueReplace) || telValueReplace === '' ? (
        ''
      ) : (
        <span className={styles.message}>숫자만 입력 가능합니다.</span>
      )}
    </fieldset>
  );
}

export default PersonalInfo;
