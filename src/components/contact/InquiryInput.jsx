import { func, string } from 'prop-types';
import React from 'react';
import styles from '@/components/contact/Contact.module.css';

function InquiryInput({
  type, id, name, defaultValue, onClick, labelText, img, alt,
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
        <img src={img} alt={alt} />
        <span className={styles.radioSpan}>{labelText}</span>
      </label>
    </div>
  );
}

InquiryInput.defaultProps = {
  type: 'radio',
  id: '',
  name: '',
  defaultValue: '',
  onClick: () => null,
  labelText: '',
  img: '',
  alt: '',
};

InquiryInput.propTypes = {
  type: string,
  id: string,
  name: string,
  defaultValue: string,
  onClick: func,
  labelText: string,
  img: string,
  alt: string,
};

export default InquiryInput;
