import React from 'react';

function TemplateValueOrder({
  divClassName,
  valueText,
  valueClassName,
  valuePrice,
}) {

  return (
    <>
      <div className={divClassName}>
        <p className={valueClassName}>{valueText}</p>
        <p className={valueClassName}>R$ {valuePrice},00</p>
      </div>
    </>
  )

}


export default TemplateValueOrder