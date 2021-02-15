import React, { useState } from 'react';
import ShowMenuCafe from "../components/ShowMenuCafe";
import ItensPedidos from "../components/ItensPedido";
import './Cafe.css';

function Cafe() {

    return (
    <div className="Cafe">
      <ShowMenuCafe />
      <ItensPedidos />
    </div>
  );
}
export default Cafe;