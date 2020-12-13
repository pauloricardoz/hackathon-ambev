import React from 'react';
import { Link } from 'react-router-dom';
import fotoBanner from '../images/fotoBanner.png';

const Main = () => {
  return (
    <div>
      <div>
        <div>
          <img alt="Banner Principal" src={fotoBanner} />
        </div>
        <h1>
          Seu abastecimento de bebidas nunca foi tão simples, fácil e intuitivo
        </h1>
        <p> 
          Uma preocupação a menos para o seu evento!
        </p>
        <p>
          Clique em COMEÇAR e fassa agente seu pedido
        </p>
        <button type="button">
          <Link to={`/agendamento`}>
            Começar!
          </Link>
        </button>
      </div>
    </div>
  )
};

export default Main;
