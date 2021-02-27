import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import TemplateItem from '../components/TemplateItem'
import TemplateCommand from '../components/TemplateCommand'
import Button from '../components/Button'
import './Cafe.css';

function Cafe() {
  useEffect(() => {
    getProducts()
    getData()
  }, [])

  const history = useHistory()

  const routerFechar = () => {
    history.push('/salao/fechar')
  }

  const routerSalao = () => {
    history.push('/salao')
  }

  const [menu, setMenu] = useState('');
  const [totalValor, setTotalValor] = useState(0);
  const token = localStorage.getItem("token")
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
        const breakfast = json.filter(item => item.type === 'breakfast')
        setMenu(breakfast)
      })
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
    const parent = e.target.parentNode;
    const price = parent.getAttribute('price');
    const id = parent.getAttribute('id');
    const name = parent.getAttribute('name');

    const itemPedido = {
      id: id,
      nome: name,
      price: price
    }
    adicionarItem(itemPedido)
  }

  const orderVolume = () => {
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
    <div className="Cafe">
      <button onClick={routerSalao} className="CafeMenuBtnBack">Início</button>
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
            <h3 className="totalValue">Total : {totalValor},00</h3>
          </div>
          
          <Button
          buttonOnClick={orderVolume}
          buttonText="Ver Resumo"
          />
        </div>
      </div>
    </div>
  );
}
export default Cafe;