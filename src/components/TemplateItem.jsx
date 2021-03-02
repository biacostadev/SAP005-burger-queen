import React from 'react';

function TemplateItem({
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  divOnClick,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey,
  qnt
}) {

  return (
    <>
      <div onClick={divOnClick} className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <h1 className="divName" key={itemNameKey}>{qnt}{itemName}</h1>
        <h1 className="divPrice" key={itemPriceKey}> R$ {itemPrice},00</h1>
        </div>    </>
  )

}


export default TemplateItem