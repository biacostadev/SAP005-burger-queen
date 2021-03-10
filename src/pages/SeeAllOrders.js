import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import TemplateGetOrders from '../components/TemplateGetOrders'
import '../style/GetAllOrders.css';

function SeeAllOrders() {
  useEffect(() => {
    getOrders()
  }, [])

  const status = sessionStorage.getItem("status");
  const back = sessionStorage.getItem("back");

  const history = useHistory()
  const menu = (e) => {
    e.preventDefault();
    history.push(`/${back}`);
  }

  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState('');

  const getOrders = () => {
    if (status) {
      fetch("https://lab-api-bq.herokuapp.com/orders", {
        headers: {
          "accept": "application/json",
          "Authorization": `${token}`
        },

      })
        .then((response) => response.json())
        .then((json) => {
          const order = json.filter(item => item.status === status)
          setOrders(order)
        })
    } else {
      fetch("https://lab-api-bq.herokuapp.com/orders", {
        headers: {
          "accept": "application/json",
          "Authorization": `${token}`
        },

      })
        .then((response) => response.json())
        .then((json) => {
          setOrders(json)
        })
    }
  }

  return (
    <div className="GetAllOrders">
      <div className="GetAllOrdersCards">       
        {orders && orders.map((item) => (
          <TemplateGetOrders
            divKey={Math.random()}
            divClassName="cards"
            itemStatus={item.status}
            clientNameKey={Math.random()}
            clientName={item.client_name}
            itemIdKey={Math.random()}
            itemId={item.id}
            itemCreatedAtKey={Math.random()}
            itemCreatedAt={item.createdAt}
          />
        ))}
      </div>
      <Button
        buttonOnClick={(e) => menu(e)}
        buttonText="Voltar"
        btnClassName="btnVoltar"
      />
    </div>
  )
}


export default SeeAllOrders;