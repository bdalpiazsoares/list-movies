import React from 'react';

import './button.scss';

function Button({ text = 0, onClick = () => {}, type = 'small' }) {
  const defineButtonSize = {
    small: 'button-style-small',
    big: 'button-style-big',
  }

  return (
    <button
      type='button'
      onClick={onClick}
      className={defineButtonSize[type]}
    >
      {text}
    </button>
  );
}

export default Button;