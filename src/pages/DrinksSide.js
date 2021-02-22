import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import './DrinksSide.css';

function DrinksSide() {
  useEffect(() => {
    getProducts()
    getData()
  }, [])

  const history = useHistory()

  const routerFechar = () => {
    history.push('/salao/fecharallday')
  }

  const routerAllDay = () => {
    const objPedidos = [
      { "pedidos": pedidos }
    ]
    const objValor = [
      totalValor,
    ]

    console.log(objPedidos)
    sessionStorage.setItem("pedidos", JSON.stringify(objPedidos));
    sessionStorage.setItem("valor", JSON.stringify(objValor));
    history.push('/salao/allday')
  }

  const getData = () => {
    const dataPedido = sessionStorage.getItem("pedidos")
    if(dataPedido) {
      const getData = JSON.parse(sessionStorage.getItem("pedidos"))
      console.log(getData)
      const itemPedido = getData[0].pedidos
      console.log(itemPedido)
      setPedidos(itemPedido)
    }

    const dataValor = sessionStorage.getItem("valor")
    if(dataValor) {
      const getValue = JSON.parse(sessionStorage.getItem("valor"))
      const valuePedido = getValue[0]
      setTotalValor(valuePedido)
    }
  }

  const [menu, setMenu] = useState('');

  const [totalValor, setTotalValor] = useState(0);

  const token = localStorage.getItem("token");

  const type = sessionStorage.getItem("name");

  const [valueDelect, setValueDelect] = useState(totalValor);

  const getProducts = () => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        "accept": "application/json",
        "Authorization": `${token}`
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter(item => item.sub_type === type)
        setMenu(breakfast)
      })
  }

  const [pedidos, setPedidos] = useState([]);

  const adicionarItem = (item) => {
    const newArray = pedidos
    newArray.push(item)
    setPedidos(newArray)
    somarItens()
  }

  const somarItens = () => {
    pedidos.forEach(item => {
      const aux = Number(item.price)
      setTotalValor(aux + totalValor)
    })
  }

  const deletItem = (item, pedidos) => {
    pedidos.splice(pedidos.indexOf(item), 1)
    const value = item.price
    setValueDelect(totalValor - value)
    setTotalValor(totalValor - Number(item.price))
    console.log(item)
    console.log(pedidos)
    console.log(valueDelect)
  }

  const fazendoPedido = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode;
    const complement = parent.getAttribute('complement');
    const flavor = parent.getAttribute('flavor');
    const price = parent.getAttribute('price');
    const id = parent.getAttribute('id');
    const name = parent.getAttribute('name');

    const itemPedido = {
      complement: complement,
      flavor: flavor,
      id: id,
      nome: name,
      price: price

    }
    adicionarItem(itemPedido)
  }

  const setFinalPedido = (e) => {
    console.log(pedidos)
    console.log(totalValor)

    const objPedidos = [
      { "pedidos": pedidos }
    ]
    const objValor = [
      totalValor,
    ]

    console.log(objPedidos)
    sessionStorage.setItem("pedidos", JSON.stringify(objPedidos));
    sessionStorage.setItem("valor", JSON.stringify(objValor));

    routerFechar()

  }

  return (
    <div className="DrinksSide">
      <button onClick={routerAllDay} className="CafeMenuBtnBack">Menu</button>
      <h2>{type}</h2>
      <div className="CafeMenu">
        {menu && menu.map((item) => (
          <div className="divMaeDrinksSide" key={Math.random()} name={item.name} flavor={item.flavor} complement={item.complement} id={item.id} price={item.price}>
            <h1 className="divName">{item.name}</h1>
            <h1 className="divPrice">R$ {item.price},00</h1>
            <button onClick={(e) => fazendoPedido(e)} className="btnAdc">
              Adicionar
        </button>
          </div>
        ))}
        <div className="divPedidosBlock">
          <div className="divPedidos">
            <h1 className="divPedidosTitle">Pedido:</h1>

            {pedidos && pedidos.map((item) =>
              <div className="divPedidosIndividuais" key={Math.random()}>
                <button key={Math.random()} className='btnDelet' onClick={() => deletItem(item, pedidos)}>X</button>
                <p key={Math.random()}>{item.nome}</p>
                <p key={Math.random()}>{item.flavor}</p>
                <p key={Math.random()}>{item.complement}</p>
                <p key={Math.random()}>R${item.price},00</p>
              </div>
            )}
            <h3>{totalValor}</h3>
          </div>

          <button onClick={(e) => setFinalPedido(e)} className="btnAdc">Fechar</button>


        </div>
      </div>
    </div>
  );
}
export default DrinksSide;