import React, { useContext, useState } from 'react';
import myContext from '../Context';
import '../CSS/calendar.css';

const DetalhesData = () => {
  const { CEP, setCEP, city, setCity } = useContext(myContext);
  const [message, setMessage] = useState(null);
  const [cidadePedidos, setCidadePedidos] = useState([
    {
      cep: '37505448',
      city: 'Itajubá',
      neighborhood: 'Novo Horizonte',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Luiz Antônio Castelani',
    },
    {
      cep: '37505448',
      city: 'Itajubá',
      neighborhood: 'Novo Horizonte',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Luiz Antônio Castelani',
    },
    {
      cep: '37505448',
      city: 'Itajubá',
      neighborhood: 'Novo Horizonte',
      service: 'viacep',
      state: 'MG',
      street: 'Rua Luiz Antônio Castelani',
    },
    {
      cep: '36420000',
      city: 'Ouro Branco',
      neighborhood: '',
      service: 'viacep',
      state: 'MG',
      street: '',
    },
    {
      cep: '36420000',
      city: 'Ouro Branco',
      neighborhood: '',
      service: 'viacep',
      state: 'MG',
      street: '',
    },
    {
      cep: '36420000',
      city: 'Ouro Branco',
      neighborhood: '',
      service: 'viacep',
      state: 'MG',
      street: '',
    },
  ]);

  return (
    <div>
      <h1>Detalhes da data</h1>
      {city ? (
        cidadePedidos.filter((e) => e.city === city.city).map((e) => <p>{e.city}</p>)
      ) : (
        <p>Sem pedidos para essa cidade ainda</p>
      )}
    </div>
  );
};

export default DetalhesData;
