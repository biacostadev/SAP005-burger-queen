import React from 'react';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom'
import '../style/Cozinha.css';


function Cozinha() {

  const history = useHistory()
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }

  function Preparar(e) {
    e.preventDefault();
    sessionStorage.setItem("status", "pending");
    sessionStorage.setItem("newStatus", "pronto");
    sessionStorage.setItem("back", "cozinha");
    sessionStorage.setItem("btn", "O pedido está pronto");
    history.push('/alloders')
  }

  const routerAllOrders = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("newStatus");
    sessionStorage.setItem("back", "cozinha");
    history.push('/seealloders')
  }

  return (
    <div className="Cozinha">   
    <h1>Cozinha :</h1>  
      <Button
        buttonOnClick={(e) => Preparar(e)}
        buttonText="Preparar"
        btnClassName="btnForm"
      />
      <Button
        buttonOnClick={(e) => routerAllOrders(e)}
        buttonText="Todos os Pedidos"
        btnClassName="btnForm"
      />
       <Button
        buttonOnClick={(e) => logout(e)}
        buttonText="Sair"
        btnClassName="btnForm"
      />
    </div>
    

  );
}
export default Cozinha;
