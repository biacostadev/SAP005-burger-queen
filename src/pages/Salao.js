import React, { useState } from 'react';
import Button from '../components/Button'
import InputTxt from '../components/InputTxt';
import { useHistory } from 'react-router-dom'
import '../style/Salao.css';
import OpenModal from '../components/Modal'

function Salao() {
  const [visbleInput, setVisibleInput]= useState(false)
  const history = useHistory()
  const routerCafe = () => {
    if(nameClient === "" || table === ""){
      setVisibleInput(true)
    }else{
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)

    history.push('/salao/cafe')
    }
  }

  const routerAllDay = () => {
    if(nameClient === "" || table === ""){
      setVisibleInput(true)
    }else{
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)
    history.push('/salao/allday')
    }
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

  const routerAllOrders = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("newStatus");
    sessionStorage.setItem("back", "salao");
    history.push('/alloders')
  }


  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  const [nameClient, setNameClient] = useState([]);
  const [table, setTable] = useState('');

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }

  return (
    <div className="Salao">
      <div className="SalaoPedido">
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
        {visbleInput ? <OpenModal >
      <>
        <h1>Todos os campos devem ser preenchidos.</h1>        
      </>   
      </OpenModal>: null}  
        <div className="inputSalao">
          <div className="inputLabel">            
            <InputTxt
              inputType="text"
              inputPlaceholder="Cliente"
              inputValue={nameClient}
              inputOnChange={(event) => setNameClient(event.target.value)}
              labelHtmlFor="cadInputEmail"
              labelText="Cliente:"
              labelClassName="cadLabel"
              inputClassName="cadInput"
            />
          </div>

          <div className="inputLabel">
            <InputTxt
              inputType="number"
              inputPlaceholder="Mesa"
              inputValue={table}
              inputOnChange={(event) => setTable(event.target.value)}
              labelHtmlFor="cadInputEmail"
              labelText="Mesa:"
              labelClassName="cadLabel"
              inputClassName="cadInput"
            />
          </div>
        </div>
      </div>

      <div className="SalaoVerPedidos">
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
        <Button
          buttonOnClick={(e) => routerAllOrders(e)}
          buttonText="Todos os Pedidos"
        />
        <Button
          buttonOnClick={(e) => logout(e)}
          buttonText="Sair"
        />
      </div>


    </div>
  )
}


export default Salao;
