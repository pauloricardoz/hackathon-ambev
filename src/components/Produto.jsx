import React, { useContext, useState } from 'react';
import myContext from '../Context';
import '../CSS/produto.css';

function Produto(props) {
  const { image, titulo, preco, id } = props;
  const { cart, setCart } = useContext(myContext);
  console.log(cart, id);
  console.log(cart[id]);
  return (
    <div className="produto">
      <img src={image} className="image" />
      <p>{titulo}</p>
      <p>{preco}</p>
      <button
        onClick={() => {
          if (cart[id]) {
            setCart((cartInst) => {
              return {
                ...cartInst,
                [id]: { qty: cartInst[id].qty > 0 ? cartInst[id].qty - 1 : 0 },
              };
            });
          }
        }}
      >
        -
      </button>
      {cart[id] ? cart[id].qty : 0}
      <button
        onClick={() => {
          if (cart[id]) {
            setCart((cartInst) => {
              return { ...cartInst, [id]: { qty: cartInst[id].qty + 1 } };
            });
          } else {
            setCart((cartInst) => {
              return { ...cartInst, [id]: { qty: 1 } };
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
