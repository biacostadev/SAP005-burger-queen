import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './FecharPedido.css';

function FecharPedido() {
  const history = useHistory()

  const routerSalao = () => {
    history.push('/salao')
  }
  const getValue = JSON.parse(sessionStorage.getItem("valor"))
  const valuePedido = getValue[0]
  console.log(valuePedido)

  const getData = JSON.parse(sessionStorage.getItem("pedidos"))
  const itemPedido = getData[0].pedidos

  const token = localStorage.getItem("token")
  const nameClient = sessionStorage.getItem("nameCliente");
  const table = sessionStorage.getItem("table");

  console.log(token)

  function postItems(e) {
    e.preventDefault();
    
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        "client": nameClient,
        "table": table,
        "products": 
          itemPedido.map((item) => (
            {
              "id": Number(item.id),
              "qtd": 1
            }
          ))
        
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        routerSalao()
        sessionStorage.removeItem("pedidos")
        sessionStorage.removeItem("valor")
      })
  }

  return (
    <>
      <div className="FecharPedido">
        <h1 className="FecharPedidoTitle">Fechar Pedido</h1>
        {itemPedido && itemPedido.map((item) => (
          <div key={Math.random()} id={item.id} className="FecharPedidoItem">
            <p key={Math.random()} className="FecharPedidoName">{item.nome}</p>
            <p key={Math.random()} className="FecharPedidoPrice">R${item.price},00</p>
          </div>
        ))}
        <div className="FecharPedidoItem">
          <p className="FecharPedidoTotal">Total:</p>
          <p className="FecharPedidoTotal">R$ {valuePedido},00</p>
        </div>
        <button onClick={(e) => postItems(e)} className="FecharPedidoBtn">Enviar pedido</button>
      </div>
    </>
  );


}
export default FecharPedido;
