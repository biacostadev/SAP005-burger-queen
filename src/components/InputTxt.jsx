import React from 'react';

function InputTxt({
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputClassName,
  labelClassName,
  labelHtmlFor,
  labelText
}) {

  return (
    <>
      <label className={labelClassName} htmlFor={labelHtmlFor}>{labelText}</label>
      <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputOnChange}
       className={inputClassName}/>
    </>
  )

}


export default InputTxt