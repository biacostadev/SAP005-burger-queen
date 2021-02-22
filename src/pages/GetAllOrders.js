import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './GetAllOrders.css';

function GetAllOrders() {
  useEffect(() => {
    getOrders()
  }, [])

  const status = sessionStorage.getItem("status");

  const history = useHistory()
  const menu = (e) => {
    e.preventDefault();
    history.push('/salao');
  }

  const routerStatus = () => {
    history.push('/status');
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
        const order = json.filter(item => item.status === status)
        setOrders(order)
       
      })


  }

  // console.log(orders.Products)

  // orders && orders.map((prod) => (

  //   console.log(prod.Products.map((item) => (
  //     item.name
  //   )))
  // )

  // )

  const [products, setProducts] = useState([]);


  //   const teste = () => {
  //     orders && orders.map((item) => {
  //       const prod = item.Products
  //       const nomeCliente = item.client_name;
  //       const newArray = products
  //       // newArray.push(nomeCliente)
  //       // console.log(objeto)

  //       prod.map((prodItens) => {
  //         const objeto = {
  //           nomeCliente: nomeCliente,
  //           nome: prodItens.name,
  //           qtd: prodItens.qtd
  //         }

  //         newArray.push(objeto)

  //         console.log(products)
  //       })

  //   })
  // }




  // prod && prod.map((item) => (
  //   console.log(item)
  // ))

  // console.log(prod.Products)



  // console.log(teste)


  return (
    <div className="GetAllOrders">
      <div className="SalaoHeader">
        <button onClick={(e) => menu(e)} className="logout">Voltar</button>

        {orders && orders.map((item) => (
          <div className="logout" key={Math.random()} onClick={(e) => {
            sessionStorage.setItem("itemId", item.id)
            routerStatus()
          }}>
            <p key={Math.random()}>{item.client_name}</p>
            <p key={Math.random()}>{item.id}</p>
            <p key={Math.random()}>{item.createdAt}</p>
          </div>
        ))}

        {/* <p>{teste()}</p> */}


      </div>
    </div>
  )
}


export default GetAllOrders;
