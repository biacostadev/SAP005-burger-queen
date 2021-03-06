import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../style/Confirmado.css';

function Confirmado() {

  const history = useHistory()

  const routerConfirm = () => {
    history.push('/login')
  }

  return (
    <div className="Confirmado">
      <h1 className="ConfmTitle">Usuário criado com sucesso!</h1>
      <h1 className="ConfmTitle">Faça o login:</h1>
      <button className="confBtn" onClick={routerConfirm}>Login</button>
    </div>
  );
}

export default Confirmado;