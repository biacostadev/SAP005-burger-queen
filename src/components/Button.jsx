import React from 'react';

function Button({
  buttonOnClick,
  buttonText,
}) {
   
  return (
    <>
    <button onClick={buttonOnClick} className="btnComponent">{buttonText}</button>
    </>
  )

}


export default Button