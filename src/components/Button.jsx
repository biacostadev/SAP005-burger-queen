import React from 'react';

function Button({
  buttonOnClick,
  buttonText,
}) {
   
  return (
    <>
    <button onClick={buttonOnClick} className="btnMenu">{buttonText}</button>
    </>
  )

}


export default Button