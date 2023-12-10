import PropTypes from 'prop-types';
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

ContactButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactButton;
