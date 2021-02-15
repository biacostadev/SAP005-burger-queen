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
        <h1>{this.props.text}</h1>
        <button onClick={this.handleClick} className={this.props.className}>
          {this.props.label}
        </button>
      </div>
    );
  }

}


export default BtnClick