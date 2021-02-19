import React from 'react';
import { useHistory } from 'react-router-dom'
import './Cafe.css';

function AllDay() {
  const history = useHistory()

  const routerBurger = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode;
    const name = parent.getAttribute('name');
    sessionStorage.setItem("name", name)
    history.push('/salao/burger')
  }

  const routerDrinksSide = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode;
    const name = parent.getAttribute('name');
    sessionStorage.setItem("name", name)
    history.push('/salao/drinksside')
  }

  const routerSalao = (e) => {
    history.push('/salao')
  }

  return (
    <div className="Cafe">
      <button onClick={routerSalao} className="CafeMenuBtnBack">Início</button>

      <div className="CafeMenu">

        <div className="divMae" name="Hambúrguer simples">
          <button onClick={(e) => {routerBurger(e)}} className="btnAdc">
            Hambúrguer simples
        </button>
        </div>
        <div className="divMae" name="Hambúrguer duplo">
          <button onClick={routerBurger} className="btnAdc">
            Hambúrguer duplo
        </button>
        </div>
        <div className="divMae" name="side">
          <button onClick={routerDrinksSide} className="btnAdc">
            Adicionais
        </button>
        </div>
        <div className="divMae" name="drinks">
          <button onClick={routerDrinksSide} className="btnAdc">
            Bebidas
        </button>
        </div>
      </div>
    </div>
  );
}
export default AllDay;