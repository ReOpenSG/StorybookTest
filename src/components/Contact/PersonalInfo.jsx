import React from 'react';
import FillingInput from './FillingInput';

function PersonalInfo() {
  return (
    <fieldset className="flex flex-row flex-wrap grow gap-open-xl py-open-2xl border-b -border--open-gray-200">
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
