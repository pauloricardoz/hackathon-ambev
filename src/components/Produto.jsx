import React from 'react';
import '../CSS/produto.css';

function Produto(props) {
  const { image, titulo, preco } = props;

  return (
    <div className="produto">
      <img src={image} className="image" />
      <p>{titulo}</p>
      <p>{preco}</p>
      <button>-</button>0<button>+</button>
    </div>
  );
}

export default Produto;
