import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Cafe.css';

function Cafe() {
  useEffect(() => {
    getProducts()
  }, [])

  const history = useHistory()

  const routerFechar=()=>{
    history.push('/salao/fechar')
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

  const deletItem = (item, pedidos)=>{  
    pedidos.splice(pedidos.indexOf(item),1)
    const value = item.price
    setValueDelect(totalValor-value)  
    setTotalValor(totalValor - Number(item.price))
    console.log(item)
    console.log(pedidos)
    console.log(valueDelect)
  }
  
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
               adicionarItem(itemPedido)
              }
            } className="btnAdc">
              Adicionar
        </button>
          </div>
        ))}
        <div className="divPedidosBlock">
          <div className="divPedidos">
            <h1 className="divPedidosTitle">Pedido:</h1>
            
            {pedidos && pedidos.map((item)=>
            <div className="divPedidosIndividuais" key={Math.random()}> 
            <button key={Math.random()} className='btnDelet' onClick = {()=>deletItem(item,pedidos)}>X</button>           
            <p key={Math.random()}>{item.nome}</p>
            <p key={Math.random()}>R${item.price},00</p>            
            </div>         
            )}            
           <h3>{totalValor}</h3>  
          </div>
          
          <button onClick={
            (event) => {
              console.log(pedidos)
              console.log(totalValor)
             
              const objPedidos = [
                {"pedidos": pedidos}
              ]
              const objValor = [
                totalValor,
              ]

              console.log(objPedidos)
              sessionStorage.setItem("pedidos", JSON.stringify(objPedidos));
              sessionStorage.setItem("valor", JSON.stringify(objValor));

              // routerFechar()

            }
          } className="btnAdc">Fechar</button>
         
          
        </div>
      </div>
    </div>
  );
}
export default Cafe;