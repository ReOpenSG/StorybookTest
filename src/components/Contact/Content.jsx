import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FillingInput from './FillingInput';
import styles from './Contact.module.css';

function Content() {
  const textareaId = uuidv4();

  return (
    <fieldset className={styles.contentWrapper}>
      <FillingInput
        labelText="제목"
        inputType="text"
        name="title"
        placeholderText="AGV 구매 문의"
      />
      <div className={styles.wrapper}>
        <label htmlFor={textareaId}>
          <h3 className={styles.label}>내용</h3>
        </label>
        <textarea
          name="message"
          id={textareaId}
          cols="30"
          rows="10"
          placeholder="AGV 2대 견적 문의드립니다."
          className={styles.textarea}
          required
        />
      </div>
    </fieldset>
  );
}

export default Content;
