import React from 'react';

function TemplateChangeStatus({
  itemKey,
  itemName,
  itemQtd,
  className,
  itemFlavor,
  itemComplement
}) {


  return (
    <>
      <p key={itemKey} className={className}> {itemQtd} {itemName} {itemFlavor}  {itemComplement}</p>
    </>
  )

}


export default TemplateChangeStatus