import React, { useState } from 'react';
import InputTxt from '../components/InputTxt';
import Select from '../components/Select';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom'
import './Cadastro.css';

function Cadastro() {
  const history = useHistory()

  const routerConfirm = () => {
    history.push('/confirmado')
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const postCad = (e) => {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/users/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}&role=${role}&restaurant=BurgerHunger&name=${name}`
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id !== null) {
          routerConfirm();
        }
      })
  }

  return (
    <div className="Cadastro">
      <h1 className="CadTitle">Cadastro</h1>
      <form className="FormCadastro">
        <InputTxt
          inputType="text"
          inputPlaceholder="Nome"
          inputValue={name}
          inputOnChange={(event) => setName(event.target.value)}
          labelHtmlFor="cadInputName"
          labelText="Nome:"
          labelClassName="cadLabel"
          inputClassName="cadInput"
        />

        <InputTxt
          inputType="text"
          inputPlaceholder="E-mail"
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          labelHtmlFor="cadInputEmail"
          labelText="E-mail:"
          labelClassName="cadLabel"
          inputClassName="cadInput"
        />

        <InputTxt
          inputType="password"
          inputPlaceholder="Senha"
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
          labelHtmlFor="cadInputPassword"
          labelText="Senha:"
          labelClassName="cadLabel"
          inputClassName="cadInput"
        />

        <Select
          selectName="ordenar"
          selectValue={role}
          selectOnChange={(event) => setRole(event.target.value)}
          selectClassName="cadInput cardSelect"
          optionValue1=''
          optionValue2="salao"
          optionValue3="cozinha"
          optionText1="Cargo"
          optionText2="Garçom"
          optionText3="Cozinheiro"
          optionClassName="cadInputOption"
          optionDisabled
          labelClassName="cadLabel"
          labelHtmlFor="cadInputRole"
          labelText="Cargo:"
        />

        <Button
          buttonOnClick={(e) => postCad(e)}
          buttonText="Cadastrar"
        />
        
      </form>
    </div>
  );
}

export default Cadastro;