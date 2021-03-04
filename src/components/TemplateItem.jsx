import React from 'react';
import Button from "./Button";

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
  itemQnt
}) {

  return (
    <>
      <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <h1 className="divName" key={itemNameKey}>{itemQnt}{itemName}</h1>
        <div className="divButton">
        <h1 className="divPrice" key={itemPriceKey}> R$ {itemPrice},00</h1>
        <Button
        buttonOnClick={divOnClick}
        buttonText="+"
        />
        </div>
        </div>
    </>
  )

}


export default TemplateItem