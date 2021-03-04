import '../style/Login.css';
import React, { useState } from 'react';
import InputTxt from '../components/InputTxt';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom'


function Login() {
  const history = useHistory()

  const routerSalao = () => {
    history.push('/salao')
  }
  const routerCozinha = () => {
    history.push('/cozinha')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function loginBtn(e) {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`

    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const token = json.token
        const id = json.id

        const tokenUser = localStorage.setItem("token", token)
        const idUser = localStorage.setItem("id", id)

        if (tokenUser !== null && idUser !== null && json.role === "salao") {
          routerSalao();
        } else if (tokenUser !== null && idUser !== null && json.role === "cozinha") {
          routerCozinha();
        } else {
          alert("Usuario não encontrado")
        }
      })
  };

  return (
    <div className="Login">
      <form className="LoginForm">

        <InputTxt
          inputType="text"
          inputPlaceholder=" Digite seu E-mail"
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          inputClassName="LoginInput"
        />

        <InputTxt
          inputType="password"
          inputPlaceholder=" Digite sua senha"
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
          inputClassName="LoginInput"
        />

        <Button 
          buttonOnClick={loginBtn}
          buttonText="Login"
          btnClassName="btnForm"
        />

      </form>
    </div>
  );
}

export default Login;
