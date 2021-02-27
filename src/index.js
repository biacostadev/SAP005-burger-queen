import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Cadastro from './pages/Cadastro';
import App from './pages/App';
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
import ChangeStatus from './pages/ChangeStatus';
import GetAllOrders from './pages/GetAllOrders';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route,Redirect} from 'react-router-dom'
import { isAuthenticated } from "./router-auth";

const PrivateRoute = ({component: Component, ...rest})=>(
  <Route 
    {...rest} 
    render ={props =>(
      isAuthenticated()? (
        <Component{...props}/>
      ) : (
        <Redirect to={{pathname: '/login', state:{ from: props.location}}} />
      )
      )      
    }
  />
);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}  exact/>
      <Route path = "/login" component={Login} exact/>
      <Route path = "/cadastro" component={Cadastro} exact/>
      <Route path = "/confirmado" component={Confirmado} exact/>
      <PrivateRoute path = "/salao" component = {Salao} exact/>
      <PrivateRoute path = "/cozinha" component={Cozinha} exact/>
      <PrivateRoute path = "/salao/cafe" component={Cafe} exact/>
      <PrivateRoute path = "/salao/allday" component={AllDay} exact/>
      <PrivateRoute path = "/salao/burger" component={Burger} exact/>
      <PrivateRoute path = "/salao/drinksside" component={DrinksSide} exact/>
      <PrivateRoute path = "/salao/fechar" component={FecharPedido} exact/>
      <PrivateRoute path = "/salao/fecharallday" component={FecharPedidoAllDay} exact/>
      <PrivateRoute path = "/status" component={ChangeStatus} exact/>
      <PrivateRoute path = "/alloders" component={GetAllOrders} exact/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
