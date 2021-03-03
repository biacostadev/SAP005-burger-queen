import React from 'react';
import '../style/modal.css'

const OpenModal=(props)=>{
const {children} = props
const {routerLink} = props
  return (
   <div className="modal">           
            <div className="content">{children}{routerLink}</div>     
   </div>       
    
  )

}


export default OpenModal
 