import React from 'react';
import Logo from './logo.png';
import Button from '../components/Button'
import '../style/App.css';
import {useHistory} from 'react-router-dom'


function App() {
  const history = useHistory()

  const routerRegister=()=>{
    history.push('/cadastro')
  }
  const routerLogin=()=>{
    history.push('/login')
  }
  return (
    <div className="AppInit">
      <img src={Logo} className="logo" alt="logo Burger Hunger"/>
      <nav className="nav">
        <Button
        buttonOnClick={routerLogin}
        buttonText="Login"
        />
        <Button
        buttonOnClick={routerRegister}
        buttonText="Cadastrar"
        />        
      </nav>
    </div>
  );

 
}
export default App;
