import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './Contact.module.css';

function FillingInput({
  labelText,
  inputType,
  name,
  placeholderText,
  onChange,
  maxLength,
  value,
  onInput,
}) {
  const id = uuidv4();
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>
        <h4 className={styles.label}>{labelText}</h4>
      </label>
      <input
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholderText}
        className={styles.input}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onInput={onInput}
        required
      />
    </div>
  );
}

FillingInput.defaultProps = {
  maxLength: '',
  value: '',
  onChange: () => null,
  onInput: () => null,
};

FillingInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,

  maxLength: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
};

export default FillingInput;
