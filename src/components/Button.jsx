import React from 'react';

function Button({
  buttonOnClick,
  buttonText,
  btnClassName
}) {
   
  return (
    <>
    <button onClick={buttonOnClick} className={btnClassName}>{buttonText}</button>
    </>
  )

}


export default Button