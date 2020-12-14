import React, { useContext, useState } from 'react';
import myContext from '../Context';
import '../CSS/produto.css';

function Produto(props) {
  const { image, titulo, preco, id } = props;
  const { cart, setCart } = useContext(myContext);

  return (
    <div className="produto">
      <img src={image} className="image" />
      <p>{titulo}</p>
      <p> 12 unid </p>
      <p>R$ {(preco * 12).toFixed(2)}</p>
      <button
        onClick={() => {
          if (cart[id]) {
            setCart((cartInst) => {
              return {
                ...cartInst,
                [id]: { ...cartInst[id], qty: cartInst[id].qty > 0 ? cartInst[id].qty - 1 : 0 },
              };
            });
          }
        }}
      >
        -
      </button>{' '}
      {cart[id] ? cart[id].qty : 0}{' '}
      <button
        onClick={() => {
          if (cart[id]) {
            setCart((cartInst) => {
              return { ...cartInst, [id]: { ...cartInst[id], qty: cartInst[id].qty + 1 } };
            });
          } else {
            setCart((cartInst) => {
              return { ...cartInst, [id]: { ...cartInst[id], qty: 1, price: preco } };
            });
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default Produto;
