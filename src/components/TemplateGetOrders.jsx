import React from 'react';

function TemplateGetOrders({
  divClassName,
  divKey,
  divOnClick,
  clientNameKey,
  clientName,
  itemIdKey,
  itemId,
  itemCreatedAtKey,
  itemCreatedAt,
  itemStatus
}) {


  return (
    <>
      <div className={divClassName} key={divKey} onClick={divOnClick}>
        <p>{itemStatus}</p>
        <p key={clientNameKey}> Nome: {clientName}</p>
        <p key={itemIdKey}> Mesa: {itemId}</p>
        <p key={itemCreatedAtKey}>{itemCreatedAt}</p>
      </div>
    </>
  )

}


export default TemplateGetOrders