import React from 'react';

function TemplateCommand({
  divClassName,
  divKey,
  btnKey,
  btnClassName,
  btnOnClick,
  btnText,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey
}) {

  return (
    <>
      <div className={divClassName}  key={divKey}>
        <button key={btnKey} className={btnClassName} onClick={btnOnClick}>{btnText}</button>
        <p key={itemNameKey}>{itemName}</p>
        <p key={itemPriceKey}>R${itemPrice},00</p>
      </div>
    </>
  )

}


export default TemplateCommand