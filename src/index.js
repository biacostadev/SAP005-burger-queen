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
import FecharPedido from './pages/FecharPedido';
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
      <PrivateRoute path = "/salao/fechar" component={FecharPedido} exact/>
      
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
