import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FillingInput from './FillingInput';
import styles from '@/components/contact/Contact.module.css';

function Content() {
  const textareaId = uuidv4();

  return (
    <fieldset className="flex flex-col gap-open-lg tablet:gap-open-xl desktop:gap-open-xl grow py-open-2xl">
      <FillingInput labelText="제목" name="title" placeholderText="AGV 구매 문의" />
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
        />
      </div>
    </fieldset>
  );
}

export default Content;
