import PropTypes from 'prop-types';
import React from 'react';
import styles from './Contact.module.css';
import ProductIcon from './icons/ProductIcon';

function InquiryInput({
  type, id, name, defaultValue, labelText,
}) {
  return (
    <div className="w-[160px]">
      <input type={type} id={id} name={name} defaultValue={defaultValue} className="hidden peer" />
      <label
        htmlFor={id}
        className={`peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-accent-accent ${styles.inquiryLabel}`}
      >
        {/* 추후 아이콘 변경사항을 반영하기 위해 임의로 작성해둔 코드입니다. */}
        {labelText === '제품 문의' ? (
          <ProductIcon />
        ) : labelText === '구매 문의' ? (
          <ProductIcon />
        ) : labelText === 'AS 문의' ? (
          <ProductIcon />
        ) : (
          <ProductIcon />
        )}
        <span>{labelText}</span>
      </label>
    </div>
  );
}

InquiryInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InquiryInput;
