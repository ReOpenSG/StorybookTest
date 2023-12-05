import { oneOf, string } from 'prop-types';
import React from 'react';

function Button({ type, buttonText, buttonStyle }) {
  return (
    <button type={type} className={buttonStyle}>
      {buttonText}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  buttonText: '',
  buttonStyle: '',
};

Button.propTypes = {
  type: oneOf(['submit', 'button', 'reset']),
  buttonText: string,
  buttonStyle: string,
};

export default Button;
