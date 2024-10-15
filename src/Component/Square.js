import React from 'react';
import DoraImage from '../assets/Images/dora.png';
import BujjiImage from '../assets/Images/bujji.png';

function Square({ value, onClickHandle, player }) {
  let content = null;
  if (value === 'X') {
    content = (
      <img
        src={DoraImage}
        alt="Dora"
        className="square-image"
      />
    );
  } else if (value === 'O') {
    content = (
      <img
      src={BujjiImage}        alt="Boots"
        className="square-image"
      />
    );
  }

  return (
    <button className="square" onClick={onClickHandle}>
      {content}
    </button>
  );
}

export default Square;