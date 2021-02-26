import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './ChangeStatus.css';

function ChangeStatus() {
  useEffect(() => {
    getOrders()
  }, [])

  const itemId = sessionStorage.getItem("itemId");
  const newStatus = sessionStorage.getItem("newStatus");

  const history = useHistory()
  const menu = (e) => {
    e.preventDefault();
    history.push('/alloders');
  }

  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState('');

  const getOrders = () => {

    fetch(`https://lab-api-bq.herokuapp.com/orders/${itemId}`, {
      headers: {
        "accept": "application/json",
        "Authorization": `${token}`
      },

    })
      .then((response) => response.json())
      .then((json) => {
        const objeto = json.Products
        setOrders(objeto)
        console.log(orders)
      })
  }

  const putStatus = () => {
    fetch(`https://lab-api-bq.herokuapp.com/orders/${itemId}`, {
      method: "PUT",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        "status": newStatus
      })

    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <div className="ChangeStatus">
      <div className="SalaoHeader">
        <button onClick={(e) => menu(e)} className="logout">Lista de pedidos para fazer</button>

        <div className="logout" key={Math.random()}>
        {orders && orders.map((item) => (
          <p key={Math.random()}>{item.name} | {item.qtd}</p>
          ))}
          <button onClick={putStatus}>Atualizar</button>
          </div>

      </div>
    </div>
  )
}


export default ChangeStatus;
