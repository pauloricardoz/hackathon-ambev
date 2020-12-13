import React, { useContext, useEffect, useState } from 'react';
import Produto from '../components/Produto';
import myContext from '../Context';
import '../CSS/pedido.css';

const mockProdutos = [
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 0,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 1,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 2,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 5,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 3,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
    id: 4,
  },
];

const Pedido = (props) => {
  const { date, CEP, city, cart } = useContext(myContext);
  console.log(Object.entries(cart));
  return (
    <div>
      <h1>Escolha os produtos e as quantidades</h1>
      <span>
        {Object.entries(cart)
          .reduce((a, c) => a + c[1].qty * c[1].price, 0)
          .toFixed(2)}
      </span>
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
