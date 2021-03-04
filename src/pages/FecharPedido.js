import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import TemplateOrderVolume from '../components/TemplateOrderVolume'
import TemplateValueOrder from '../components/TemplateValueOrder'
import '../style/FecharPedido.css';

function FecharPedido() {
  const history = useHistory()

  const routerSalao = () => {
    history.push('/salao')
  }

  const routerCoffe = () => {
    history.push('/salao/cafe')
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
              "qtd": Number(item.qnt)
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
        <Button
          buttonOnClick={routerCoffe}
          buttonText="Voltar"
          btnClassName="btnResumo"
        />
        <h1 className="FecharPedidoTitle">Resumo do Pedido</h1>
        {itemPedido && itemPedido.map((item) => (
          <TemplateOrderVolume
            divClassName="FecharPedidoItem"
            divKey={Math.random()}
            divId={item.id}
            qnt= {item.qnt}
            itemName={item.nome}
            itemPrice={item.price}
            itemNameKey={Math.random()}
            itemPriceKey={Math.random()}
          />
        ))}
        <TemplateValueOrder
          divClassName="FecharPedidoItem"
          valueText="Total:"
          valueClassName="FecharPedidoTotal"
          valuePrice={valuePedido}
        />
        <Button
          buttonOnClick={(e) => postItems(e)}
          buttonText="Enviar pedido"
          btnClassName="btnResumo"
        />
      </div>
    </>
  );


}
export default FecharPedido;
