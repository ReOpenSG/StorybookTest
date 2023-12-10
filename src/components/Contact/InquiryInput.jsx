import PropTypes from 'prop-types';
import React from 'react';
import styles from '@/components/contact/Contact.module.css';
import ProductIcon from './icons/ProductIcon';

function InquiryInput({
  type, id, name, defaultValue, onClick, labelText,
}) {
  return (
    <div className="w-[160px]">
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onClick={onClick}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="flex flex-col gap-open-xl items-center -bg--open-gray-50 rounded-[20px] px-open-2xl py-open-xl peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
      >
        <ProductIcon color="black" />
        <span className={styles.radioSpan}>{labelText}</span>
      </label>
    </div>
  );
}

InquiryInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InquiryInput;
