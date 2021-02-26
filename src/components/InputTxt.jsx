import React from 'react';

function InputTxt({
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputClassName,
  inputLabelClassName,
  inputLabelHtmlFor,
  inputLabelText
}) {

  return (
    <>
      <label className={inputLabelClassName} htmlFor={inputLabelHtmlFor}>{inputLabelText}</label>
      <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputOnChange} className={inputClassName}/>
    </>
  )

}


export default InputTxt