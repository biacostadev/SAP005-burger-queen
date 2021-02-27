import React from 'react';

function TemplateOrderVolume({
  divClassName,
  divKey,
  divId,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey
}) {

  return (
    <>
      <div key={divKey} id={divId} className={divClassName}>
        <p key={itemNameKey}>{itemName}</p>
        <p key={itemPriceKey}>R${itemPrice},00</p>
      </div>
    </>
  )

}


export default TemplateOrderVolume