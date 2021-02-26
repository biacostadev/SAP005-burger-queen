import React, { useState } from 'react';
import Button from '../components/Button'
import InputTxt from '../components/InputTxt';
import { useHistory } from 'react-router-dom'
import './Salao.css';

function Salao() {
  const history = useHistory()
  const routerCafe = () => {
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)

    history.push('/salao/cafe')
  }

  const routerAllDay = () => {
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)
    history.push('/salao/allday')
  }

  const routerPronto = (e) => {
    e.preventDefault();
    sessionStorage.setItem("status", "pronto");
    sessionStorage.setItem("newStatus", "entregue");
    sessionStorage.setItem("back", "salao");
    history.push('/alloders');
  }
  const routerEntregue = (e) => {
    e.preventDefault();
    sessionStorage.setItem("status", "entregue")
    sessionStorage.setItem("newStatus", "geral");
    sessionStorage.setItem("back", "salao");
    history.push('/alloders')
  }

  const routerPending = (e) => {
    e.preventDefault();
    sessionStorage.setItem("status", "pending");
    sessionStorage.setItem("newStatus", "pronto");
    sessionStorage.setItem("back", "salao");
    history.push('/alloders')
  }


  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  const [nameClient, setNameClient] = useState([]);
  const [table, setTable] = useState('');
  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');

  fetch(`https://lab-api-bq.herokuapp.com/users/${id}`, {
    headers: {
      "accept": "application/json",
      "Authorization": `${token}`
    },

  })
    .then((response) => response.json())
    .then((json) => {
      setNome(json.name)
      setRole(json.role)
    })

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }

  return (
    <div className="Salao">
      <div className="SalaoHeader">
        <h1>{nome} - {role}</h1>
        <button onClick={(e) => logout(e)} className="logout">Sair</button>
      </div>
      <h1 className="messageSelect">Selecione o Período:</h1>
      <div className="btnSalao">
        <Button
          buttonOnClick={routerCafe}
          buttonText="Café da manhã"
        />
        <Button
          buttonOnClick={routerAllDay}
          buttonText="Resto do dia"
        />
      </div>
      <div className="inputSalao">
        <div className="inputLabel">
          <InputTxt
            inputType= "text"
            inputPlaceholder="Cliente"
            inputValue={nameClient}
            inputOnChange={(event) => setNameClient(event.target.value)}
            inputLabelHtmlFor="cadInputEmail"
            inputLabelText="Cliente:"
            inputLabelClassName="cadLabel"
            inputClassName="cadInput"
          />
          {/* <label className="cadLabel" htmlFor="cadInputEmail">Cliente:</label>
          <input type="text" placeholder="Cliente" className="cadInput" value={nameClient} onChange={(event) => setNameClient(event.target.value)} /> */}
        </div>

        <div className="inputLabel">
        <InputTxt
            inputType= "number"
            inputPlaceholder="Mesa"
            inputValue={table}
            inputOnChange={(event) => setTable(event.target.value)}
            inputLabelHtmlFor="cadInputEmail"
            inputLabelText="Mesa:"
            inputLabelClassName="cadLabel"
            inputClassName="cadInput"
          />
          {/* <label className="cadLabel" htmlFor="cadInputEmail">Mesa:</label>
          <input type="number" placeholder="Mesa" className="cadInput" value={table} onChange={(event) => setTable(event.target.value)} /> */}
        </div>
      </div>

      <Button
        buttonOnClick={(e) => routerPronto(e)}
        buttonText="Ver Pedidos Prontos"
      />
      <Button
        buttonOnClick={(e) => routerEntregue(e)}
        buttonText="Ver Pedidos Entregue"
      />
      <Button
        buttonOnClick={(e) => routerPending(e)}
        buttonText="Ver Pedidos Pending"
      />

    </div>
  )
}


export default Salao;
