import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
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
      <Button
        buttonOnClick={routerSalao}
        buttonText="Início"
      />

      <div className="CafeMenu">
        <div name="Hambúrguer simples">
          <Button
            buttonOnClick={(e) => { routerBurger(e) }}
            buttonText="Hambúrguer simples"
          />
        </div>

        <div name="Hambúrguer duplo">
          <Button
            buttonOnClick={(e) => { routerBurger(e) }}
            buttonText="Hambúrguer duplo"
          />
        </div>

        <div name="side">
          <Button
            buttonOnClick={(e) => { routerDrinksSide(e) }}
            buttonText="Adicionais"
          />
        </div>

        <div name="drinks">
          <Button
            buttonOnClick={(e) => { routerDrinksSide(e) }}
            buttonText="Bebidas"
          />
        </div>

      </div>
    </div>
  );
}
export default AllDay;