import { func, oneOf, string } from 'prop-types';
import React from 'react';

function Button({
  type, buttonText, buttonStyle, onClick,
}) {
  return (
    <button type={type} className={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  buttonText: '',
  buttonStyle: '',
  onClick: () => null,
};

Button.propTypes = {
  type: oneOf(['submit', 'button', 'reset']),
  buttonText: string,
  buttonStyle: string,
  onClick: func,
};

export default Button;
