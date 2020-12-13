import React, { useContext, useEffect, useState } from 'react';
import Produto from '../components/Produto';
import myContext from '../Context';
import '../CSS/pedido.css';

const mockProdutos = [
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
  {
    titulo: 'brahma-chopp',
    preco: 2.99,
    image: `https://courier-images-prod.imgix.net/produc_variant/00008511_81af619a-8024-42d8-b009-7127afc6baa8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2`,
  },
];

const Pedido = (props) => {
  const { date, CEP, city } = useContext(myContext);

  return (
    <div>
      <h1>Escolha os produtos e as quantidades</h1>
      <div className="lista">
        {mockProdutos.map((e) => (
          <Produto {...e} />
        ))}
      </div>
      <aside></aside>
    </div>
  );
};

export default Pedido;
