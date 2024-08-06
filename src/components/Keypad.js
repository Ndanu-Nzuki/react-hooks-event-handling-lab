// Code Keypad Component Here
import React from 'react';

const Keypad = function (){
  const handleChange = function(){
    console.log('Entering password...');
  };

  return (
    <input type="password" onChange={handleChange} />
  );
};

export default Keypad;
