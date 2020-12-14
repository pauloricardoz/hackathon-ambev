import React, { useContext, useEffect, useState } from 'react';
import Produto from '../components/Produto';
import TotalCart from '../components/totalCart';
import myContext from '../Context';
import '../CSS/pedido.css';
import mockProdutos from '../components/db';
const Pedido = (props) => {
  const { date, CEP, city, cart } = useContext(myContext);
  console.log(Object.entries(cart));
  return (
    <div>
      <h1 className="title">Escolha os produtos e as quantidades</h1>
      <div className="carrinho">
        <h3>
          {' '}
          Total: <TotalCart />
        </h3>
        <button className="btn-finCompra" onClick={() => props.history.push('/pagamento')}>
          Finalizar compra
        </button>
      </div>
      <div className="lista" data-cy="list">
        {mockProdutos.map((e) => (
          <Produto image={e.image} titulo={e.titulo} preco={e.preco} key={e.id} id={e.id} />
        ))}
      </div>
      <aside></aside>
    </div>
  );
};

export default Pedido;
