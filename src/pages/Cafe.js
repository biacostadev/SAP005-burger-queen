import React, { useEffect, useState } from 'react';
// import BtnClick from "../components/BtnClick";
// import ItensPedidos from "../components/ItensPedido";
import './Cafe.css';

function Cafe() {
  useEffect(() => {
    getProducts()
  }, [])

  const [menu, setMenu] = useState('');
  const token = localStorage.getItem("token")

  const getProducts = () => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        "accept": "application/json",
        "Authorization": `${token}`
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter(item => item.type === 'breakfast')
        setMenu(breakfast)
      })
  }

  const [pedidos, setPedidos] = useState('');
  const [jaFoi, setJaFoi] = useState(pedidos);

  return (
    <div className="Cafe">
      <div className="CafeMenu">

        {menu && menu.map((item) => (
          <div className="divMae" key={item.name} name={item.name} id={item.id} price={item.price}>
            <h1 className="divName">{item.name}</h1>
            <h1 className="divPrice">R$ {item.price},00</h1>
            <button onClick={
              (event) => {
                const parent = event.target.parentNode;
                const price = parent.getAttribute('price');
                const id = parent.getAttribute('id');
                const name = parent.getAttribute('name');

                const itemPedido = {
                  id: id,
                  nome: name,
                  price: price
                }

                setJaFoi(pedidos)
                setPedidos(jaFoi => [...jaFoi, itemPedido])
                console.log("Já foi")
                console.log(jaFoi)
                console.log("Pedidos")
                console.log(pedidos)
                console.log("Item Pedido")
                console.log(itemPedido)

              }
            } className="btnAdc">
              Adicionar
        </button>
          </div>
        ))}
        <div className="divPedidosBlock">
          <div className="divPedidos">
            <h1 className="divPedidosTitle">Pedido:</h1>
            {pedidos && pedidos.map((item) => (
              <div className="divPedidosIndividuais" key={Math.random()}>
                <p key={Math.random()}>{item.nome}</p>
                <p key={Math.random()}>R${item.price},00</p>
              </div>
            ))}
          </div>
          <button onClick={
            (event) => {
              const parent = event.target.parentNode;
              const onlyPedidos = parent.innerText;
              console.log(onlyPedidos)
            }
          } className="btnAdc">Fechar</button>
        </div>
      </div>
    </div>
  );
}
export default Cafe;