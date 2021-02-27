import React from 'react';

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

      <div onClick={divOnClick} className={divClassName} key={divKey} name={divName} flavor={divFlavor} complement={divComplement} id={divId} price={divPrice}>
        <h1 className="divNameBurger">{itemFlavor}</h1>
        <h1 className="divName">{itemComplement}</h1>
        <h1 className="divPrice">R$ {itemPrice},00</h1>
      </div>
    </>
  )

}


export default TemplateItemBurger