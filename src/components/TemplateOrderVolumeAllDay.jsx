import React from 'react';

function TemplateOrderVolumeAllDay({
  divClassName,
  divKey,
  divId,
  itemName,
  itemPrice,
  itemFlavor,
  itemComplement,
  itemNameKey,
  itemPriceKey,
  itemFlavorKey,
  itemComplementKey,
}) {

  return (
    <>
      <div key={divKey} id={divId} className={divClassName}>
        <p key={itemNameKey}>{itemName}</p>
        <p key={itemFlavorKey}>{itemFlavor}</p>
        <p key={itemComplementKey}>{itemComplement}</p>
        <p key={itemPriceKey} >R${itemPrice},00</p>
      </div>
    </>
  )

}


export default TemplateOrderVolumeAllDay