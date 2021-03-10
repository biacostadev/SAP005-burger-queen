import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import TemplateChangeStatus from '../components/TemplateChangeStatus'
import '../style/ChangeStatus.css';

function ChangeStatus() {
  useEffect(() => {
    getOrders()
  }, [])

  const itemId = sessionStorage.getItem("itemId");
  const newStatus = sessionStorage.getItem("newStatus");
  const btn = sessionStorage.getItem("btn");

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
        finishChange()
      })
  }

  return (
    <div className="ChangeStatus">
      <h1>Preparar :</h1>

      <div key={Math.random()} className="cardsPending">
        {orders && orders.map((item) => (
          <TemplateChangeStatus
            itemKey={Math.random()}
            itemQtd={item.qtd}
            itemName={item.name}
            itemComplement={item.complement}
            itemFlavor={item.flavor}
          />
        ))}


      </div>
      <Button
        buttonOnClick={putStatus}
        buttonText={btn}
        btnClassName="btnChange"
      />
      <div className="SalaoHeader">
        <Button
          buttonOnClick={(e) => menu(e)}
          buttonText="Voltar"
          btnClassName="btnChange"
        />

      </div>
    </div>
  )
}


export default ChangeStatus;
