import React, { Component } from 'react';
import BtnClick from "./BtnClick";


class ShowMenuCafe extends React.Component {
  render() {
    const menu = this.props.Menu
    console.log(menu)
    return (
      <>
      {menu.map((item) => (
        <BtnClick text={item.name} price={item.price} className="BtnNav" />
      ))}
      </>
    );
  }
  }
  

export default ShowMenuCafe