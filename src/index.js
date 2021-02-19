import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './pages/Cadastro';
import App from './App';
import Login from './pages/Login';
import Confirmado from './pages/Confirmado';
import Salao from './pages/Salao';
import Cozinha from './pages/Cozinha';
import Cafe from './pages/Cafe';
import AllDay from './pages/AllDay';
import Burger from './pages/Burger';
import DrinksSide from './pages/DrinksSide';
import FecharPedido from './pages/FecharPedido';
import FecharPedidoAllDay from './pages/FecharPedidoAllDay';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}  exact/>
      <Route path = "/cadastro" component={Cadastro} exact/>
      <Route path = "/login" component={Login} exact/>
      <Route path = "/confirmado" component={Confirmado} exact/>
      <Route path = "/salao" component={Salao} exact/>
      <Route path = "/cozinha" component={Cozinha} exact/>
      <Route path = "/salao/cafe" component={Cafe} exact/>
      <Route path = "/salao/allday" component={AllDay} exact/>
      <Route path = "/salao/burger" component={Burger} exact/>
      <Route path = "/salao/drinksside" component={DrinksSide} exact/>
      <Route path = "/salao/fechar" component={FecharPedido} exact/>
      <Route path = "/salao/fecharallday" component={FecharPedidoAllDay} exact/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
