import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './ChangeStatus.css';

function ChangeStatus() {
  useEffect(() => {
    getOrders()
  }, [])

  const history = useHistory()
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }

  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState('');

  const getOrders = () => {

    fetch("https://lab-api-bq.herokuapp.com/orders", {
      headers: {
        "accept": "application/json",
        "Authorization": `${token}`
      },
  
    })
      .then((response) => response.json())
      .then((json) => {
        const pedidos = json.filter(item => item.status === "pronto")
        console.log(pedidos)
        setOrders(pedidos)
      })
  }

  // console.log(orders)




  return (
    <div className="ChangeStatus">
      <div className="SalaoHeader">
        <button onClick={(e) => logout(e)} className="logout">Sair</button>
        {orders && orders.map((item) => (
          <div>
            <h1>{item.id}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}


export default ChangeStatus;
