import React from 'react';

function TemplateCommandBurger({
  divClassName,
  divKey,
  btnKey,
  btnClassName,
  btnOnClick,
  btnText,
  itemName,
  itemNameKey,
  itemFlavor,
  itemFlavorKey,
  itemComplement,
  itemComplementKey,
  itemPrice,
  itemPriceKey
}) {

  return (
    <>
      <div className={divClassName} key={divKey}>
        <button key={btnKey} className={btnClassName} onClick={btnOnClick}>{btnText}</button>
        <p key={itemNameKey}>{itemName}</p>
        <p key={itemFlavorKey}>{itemFlavor}</p>
        <p key={itemComplementKey}>{itemComplement}</p>
        <p key={itemPriceKey}>R${itemPrice},00</p>
      </div>
    </>
  )

}


export default TemplateCommandBurger