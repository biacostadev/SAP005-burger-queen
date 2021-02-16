import React, { Component } from 'react';
import BtnClick from "./BtnClick";


class ShowMenuCafe extends React.Component {
  render() {
    const menu = this.props.Menu
    console.log(menu)
    return (
      <>
        <BtnClick text="texto 1" className="BtnNav" label="Opção 1" />
        <BtnClick text="texto 2" className="BtnNav" label="Opção 2" />
        <BtnClick text="texto 3" className="BtnNav" label="Opção 3" />
        <BtnClick text="texto 4" className="BtnNav" label="Opção 4" />
      </>
    );
  }
  }
  

export default ShowMenuCafe