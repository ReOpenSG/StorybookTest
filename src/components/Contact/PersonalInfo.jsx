import React, { useState } from 'react';
import styles from './Contact.module.css';
import FillingInput from './FillingInput';
import { debounce } from '@/utils/debounce';

function PersonalInfo() {
  const [emailValue, setEmailValue] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [telValue, setTelValue] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const telValueReplace = telValue.replace(/-/g, '');

  const emailCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const numCheck = /^[0-9]+$/;

  return (
    <fieldset className={styles.personalInfoWrapper}>
      <div className={styles.regWrapper}>
        <FillingInput
          labelText="받으실 이메일"
          inputType="email"
          name="email"
          value={emailReg}
          placeholderText="abc@abcd.com"
          onChange={debounce((e) => {
            setEmailValue(e.target.value);
          }, 300)}
          onInput={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        {emailCheck.test(emailValue) || emailValue === '' ? (
          ''
        ) : (
          <span className={styles.message}>유효한 이메일을 입력해 주세요.</span>
        )}
      </div>
      <div className={styles.regWrapper}>
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
      </div>
    </fieldset>
  );
}

export default PersonalInfo;
