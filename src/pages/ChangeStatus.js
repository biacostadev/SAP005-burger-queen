import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import TemplateChangeStatus from '../components/TemplateChangeStatus'
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
  const back = sessionStorage.getItem("back");

  const finishChange = () => {
    history.push(`/${back}`);
  }

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
        finishChange()
      })
  }

  return (
    <div className="ChangeStatus">
      <div className="SalaoHeader">
        <Button
          buttonOnClick={(e) => menu(e)}
          buttonText="Lista de pedidos para fazer"
        />

        <div key={Math.random()}>
          {orders && orders.map((item) => (
            <TemplateChangeStatus
              itemKey={Math.random()}
              itemName={item.name}
              itemQtd={item.qtd}
            />
          ))}

          <Button
            buttonOnClick={putStatus}
            buttonText="Atualizar"
          />
        </div>

      </div>
    </div>
  )
}


export default ChangeStatus;
