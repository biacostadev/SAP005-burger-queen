import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './pages/Cadastro';
import App from './App';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}  exact/>
      <Route path = "/cadastro" component={Cadastro} exact/>
      <Route path = "/login" component={Login} exact/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
