import React, { Component } from 'react';
import BtnClick from "./BtnClick";


class ShowMenuCafe extends React.Component {
  render() {
    const menu = this.props.Menu
    console.log(menu)
    return (
      <>
        <BtnClick text={menu[0].name} price={menu[0].price} className="BtnNav" label="Opção 1" />
        <BtnClick text={menu[1].name} price={menu[1].price} className="BtnNav" label="Opção 2" />
        <BtnClick text={menu[2].name} price={menu[2].price} className="BtnNav" label="Opção 3" />
        <BtnClick text={menu[3].name} price={menu[3].price} className="BtnNav" label="Opção 4" />
      </>
    );
  }
  }
  

export default ShowMenuCafe