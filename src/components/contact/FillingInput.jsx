import { string } from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Contact.module.css';

function FillingInput({
  labelText, inputType, name, placeholderText,
}) {
  const id = uuidv4();
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>
        <h3 className={styles.label}>{labelText}</h3>
      </label>
      <input
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholderText}
        className={styles.input}
      />
    </div>
  );
}

FillingInput.defaultProps = {
  labelText: '',
  inputType: '',
  name: '',
  placeholderText: '',
};

FillingInput.propTypes = {
  labelText: string,
  inputType: string,
  name: string,
  placeholderText: string,
};

export default FillingInput;
