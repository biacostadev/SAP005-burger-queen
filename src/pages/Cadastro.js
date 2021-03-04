import React, { useState } from 'react';
import InputTxt from '../components/InputTxt';
import Select from '../components/Select';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom'
import '../style/Cadastro.css';
import OpenModal from  '../components/Modal'

function Cadastro() {
  const history = useHistory()
  const [visbleModal, setVisibleModal]= useState(false)

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
        if (json.id === undefined) {
          setVisibleModal(true)
        }else{
          routerConfirm();
        }
      })
  }

  return (
    <div className="Cadastro">
      <form className="FormCadastro">

      {visbleModal ? <OpenModal >     
        <h1>Preencha os campos corretamente.</h1>
        </OpenModal>: null} 
        <InputTxt
          inputType="text"
          inputPlaceholder="Digite seu nome"
          inputValue={name}
          inputOnChange={(event) => setName(event.target.value)}         
          inputClassName="cadInput"
        />

        <InputTxt
          inputType="text"
          inputPlaceholder="Digite seu E-mail"
          inputValue={email}
          inputOnChange={(event) => setEmail(event.target.value)}
          inputClassName="cadInput"
        />

        <InputTxt
          inputType="password"
          inputPlaceholder="Digite sua senha"
          inputValue={password}
          inputOnChange={(event) => setPassword(event.target.value)}
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
        />

        <Button
          buttonOnClick={(e) => postCad(e)}
          buttonText="Cadastrar"
          btnClassName="btnForm"
        />
        
      </form>
    </div>
  );
}

export default Cadastro;