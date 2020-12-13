import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/main.css';
import image from '../images/image.png';

const Main = () => {
  return (
    <div className='main'>
      <div className='content'>
        <h1 className='title'>
          Seu abastecimento de bebidas nunca foi tão simples, fácil e intuitivo
        </h1>
        <p className='description'>
          Uma preocupação a menos para o seu evento!
        </p>
        <p>
          Clique em COMEÇAR e agende seu pedido
        </p>
        <button type="button">
          <Link to={`/agendamento`}>
            Começar!
          </Link>
        </button>
      </div>
      <div>
        <img alt="Imagem" src={image} />
      </div>

    </div>
  )
};

export default Main;
