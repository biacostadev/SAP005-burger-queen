import React from 'react';
import { useHistory } from 'react-router-dom'
import './Cozinha.css';


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
    history.push('/alloders')
  }

  return (
    <div className="Cozinha">
      <button onClick={(e) => logout(e)} className="logout">Sair</button>

      <button onClick={(e) => Preparar(e)} className="btnMenu">Preparar</button>
      <button className="btnMenu">Prontos</button>
      <button className="btnMenu">Entregues</button>
      <button className="btnMenu">Todos os Pedidos</button>

    </div>

  );
}
export default Cozinha;
