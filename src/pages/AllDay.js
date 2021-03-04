import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import '../style/AllDay.css'

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
    sessionStorage.removeItem("pedidos");
    sessionStorage.removeItem("valor");
  }

  return (
    <div className="AllDay">     
      <div className="Menu">

        <div name="Hambúrguer simples">
          <Button
            buttonOnClick={(e) => { routerBurger(e) }}
            buttonText="Hambúrguer simples"
            btnClassName="btnAllDay"
          />
        </div>
        

        <div name="Hambúrguer duplo">
          <Button
            buttonOnClick={(e) => { routerBurger(e) }}
            buttonText="Hambúrguer duplo"
            btnClassName="btnAllDay"
          />
        </div>

        <div name="side">
          <Button
            buttonOnClick={(e) => { routerDrinksSide(e) }}
            buttonText="Adicionais"
            btnClassName="btnAllDay"
          />
        </div>

        <div name="drinks">
          <Button
            buttonOnClick={(e) => { routerDrinksSide(e) }}
            buttonText="Bebidas"
            btnClassName="btnAllDay"
          />
        </div>

      <div>
      <Button
        buttonOnClick={routerSalao}
        buttonText="Início"
        btnClassName="btnAllDay"
      />
      </div>
      </div>
    </div>
  );
}
export default AllDay;