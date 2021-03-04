import React from 'react';
import Button from "./Button";

function TemplateItemBurger({
  divClassName,
  divKey,
  divName,
  divFlavor,
  divComplement,
  divId,
  divPrice,
  divOnClick,
  itemFlavor,
  itemComplement,
  itemPrice
}) {

  return (
    <>

      <div className={divClassName} key={divKey} name={divName} flavor={divFlavor} complement={divComplement} id={divId} price={divPrice}>
        <h1 className="divNameBurger">{itemFlavor}</h1>
        <h1 className="divName">{itemComplement}</h1>
        <div className="divButton">
        <h1 className="divPrice">R${itemPrice},00</h1>
        <Button
        buttonOnClick={divOnClick}
        buttonText="+"
        />
        </div>
      </div>
    </>
  )

}


export default TemplateItemBurger