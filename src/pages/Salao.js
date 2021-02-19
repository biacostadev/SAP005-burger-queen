import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Salao.css';

function Salao() {
  const history = useHistory()
  const routerCafe=()=>{
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)

    history.push('/salao/cafe')
  }

  const routerAllDay=()=>{
    history.push('/salao/allday')
  }

  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  const [nameClient, setNameClient] = useState('');
  const [table, setTable] = useState('');
  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');

  fetch(`https://lab-api-bq.herokuapp.com/users/${id}`,{
    headers:{ 
      "accept": "application/json",
    "Authorization":`${token}`},    

  })
  .then((response) => response.json())
  .then((json) => {  
    setNome(json.name)
    setRole(json.role)
  }) 

  const getPedidos = (e) => {
    e.preventDefault();
    fetch("https://lab-api-bq.herokuapp.com/orders",{
    headers:{ 
      "accept": "application/json",
    "Authorization":`${token}`},    

  })
  .then((response) => response.json())
  .then((json) => {  
    const pedidos = json.filter(item => item.status === "pronto")
    console.log(pedidos)
  }) 
  }

  return (
    <div className="Salao">
      <div>
      <h1>{nome} - {role}</h1>
      </div>
      <h1 className="messageSelect">Selecione o Período:</h1>
      <div className="btnSalao">        
        <button className="btnSalaoRota" onClick={routerCafe}>Café da manhã</button>
        <button className="btnSalaoRota" onClick={routerAllDay}>Resto do dia </button>
      </div>
      <div className="inputSalao">
        <div className="inputLabel">
        <label className="cadLabel" htmlFor="cadInputEmail">Cliente:</label>
        <input type="text" placeholder="Cliente" className="cadInput" value={nameClient} onChange={(event) => setNameClient(event.target.value)} />
        </div>

        <div className="inputLabel">
        <label className="cadLabel" htmlFor="cadInputEmail">Mesa:</label>
        <input type="number" placeholder="Mesa" className="cadInput" value={table} onChange={(event) => setTable(event.target.value)} />
        </div>
      </div>

      <button onClick={(e) => getPedidos(e)} className="btnSalaoPedidos">Ver Pedidos Prontos</button>
    </div>
    )
}
     
 
export default Salao;
