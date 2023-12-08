import { func, oneOf, string } from 'prop-types';
import React from 'react';

function ContactButton({
  type, buttonText, buttonStyle, onClick,
}) {
  return (
    <button type={type} className={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
}

ContactButton.defaultProps = {
  type: 'button',
  buttonText: '',
  buttonStyle: '',
  onClick: () => null,
};

ContactButton.propTypes = {
  type: oneOf(['submit', 'button', 'reset']),
  buttonText: string,
  buttonStyle: string,
  onClick: func,
};

export default ContactButton;
