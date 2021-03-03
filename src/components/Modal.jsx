import React from 'react';
import '../style/modal.css'

const OpenModal=({children})=>{
  return (
   <div className="modal">           
        <div className="content">{children}</div>     
   </div>       
    
  )

}


export default OpenModal
 