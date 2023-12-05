import { string } from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function FillingInput({
  labelText, inputType, name, placeholderText,
}) {
  const id = uuidv4();
  return (
    <div className="flex items-center gap-5">
      <label htmlFor={id}>
        <h3 className="-text--openfoundation-primary font-open-label text-open-font-large mr-5">
          {labelText}
        </h3>
      </label>
      <input
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholderText}
        className="-text--openfoundation-primary text-open-font-large font-open-paragraph -bg--open-gray-50 px-5 py-[10px] grow"
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
