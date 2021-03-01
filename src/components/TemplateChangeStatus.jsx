import React from 'react';

function TemplateChangeStatus({
  itemKey,
  itemName,
  itemQtd,
  className
}) {


  return (
    <>
      <p key={itemKey} className={className}> {itemQtd}{itemName}</p>
    </>
  )

}


export default TemplateChangeStatus