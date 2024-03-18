import React, { useState, useEffect } from 'react';
import './styles.css';

const Button = ({ text, onClick, disabled }) => {
  const [isClicked, setIsClicked] = useState(false); 

  useEffect(() => {

    if (isClicked) {
      console.log('Button clicked!');
      
    }
  }, [isClicked]);

  return (
    <button
      className='button'
      onClick={() => {
        setIsClicked(true);
        onClick(); 
      }}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
