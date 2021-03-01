import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import TemplateItem from '../components/TemplateItem'
import TemplateCommand from '../components/TemplateCommand'
import Button from '../components/Button'
import '../style/DrinksSide.css';

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

  const addItemToCommand = (e) => {
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
      <div className="BtnHeader">
        <button onClick={routerAllDay} className="CafeMenuBtnBack">Menu</button>
        <h2>{type}</h2>
      </div>     
      <div className="CafeMenu">
        {menu && menu.map((item) => (
          <TemplateItem
          divClassName="divMae"
          divKey={Math.random()}
          divName={item.name}
          divId={item.id}
          divPrice={item.price}
          divOnClick={addItemToCommand}
          itemName={item.name}
          itemPrice={item.price}
          itemNameKey={Math.random()}
          itemPriceKey={Math.random()}
        />
        ))}
        <div className="divPedidosBlock">
          <div className="divPedidos">
            <h1 className="divPedidosTitle">Pedido:</h1>

            {pedidos && pedidos.map((item) =>
              <TemplateCommand
              divClassName="divPedidosIndividuais"
              divKey={Math.random()}
              btnKey={Math.random()}
              btnClassName="btnDelet"
              btnOnClick={() => deletItem(item, pedidos)}
              btnText="X"
              itemName={item.nome}
              itemPrice={item.price}
              itemNameKey={Math.random()}
              itemPriceKey={Math.random()}
            />
            )}
            <h3> Total : {totalValor},00</h3>
          </div>

          <Button
          buttonOnClick={(e) => setFinalPedido(e)}
          buttonText="Ver Resumo"
          />

        </div>
      </div>
    </div>
  );
}
export default DrinksSide;