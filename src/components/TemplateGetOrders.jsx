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
        <p key={clientNameKey}>{clientName}</p>
        <p key={itemIdKey}>{itemId}</p>
        <p key={itemCreatedAtKey}>{itemCreatedAt}</p>
      </div>
    </>
  )

}


export default TemplateGetOrders