import React from 'react';

function TemplateChangeStatus({
  itemKey,
  itemName,
  itemQtd
}) {


  return (
    <>
      <p key={itemKey}>{itemName} | {itemQtd}</p>
    </>
  )

}


export default TemplateChangeStatus