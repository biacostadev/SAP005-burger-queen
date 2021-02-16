import React, { useEffect, useState } from 'react';
import ShowMenuCafe from "../components/ShowMenuCafe";
import ItensPedidos from "../components/ItensPedido";
import './Cafe.css';

function Cafe() {
  useEffect(() => {
    getProducts()
  },[])

  const [menu, setMenu] = useState('');
  const token=localStorage.getItem("token")

  const getProducts = () => {
    fetch('https://lab-api-bq.herokuapp.com/products',{
      headers:{ 
        "accept": "application/json",
      "Authorization":`${token}`},
    })
    .then((response)=> response.json())
    .then((json)=>{
      const breakfast = json.filter(item => item.type === 'breakfast')
      setMenu(breakfast)
    })
  }
  
    return (
    <div className="Cafe">
      <ShowMenuCafe Menu={ menu }/>
      <ItensPedidos />
    </div>
  );
}
export default Cafe;