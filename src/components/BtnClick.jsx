import React, { Component } from 'react';


class BtnClick extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicado');
    console.log(this.props.text);
  }


  render(props) {
    return (
      <div className="divMae">
        <h1 className="divName">{this.props.text}</h1>
        <h1 className="divPrice">R$ {this.props.price},00</h1>
        <button onClick={this.handleClick} className={this.props.className}>
          Adicionar
        </button>
      </div>
    );
  }

}


export default BtnClick