import React, { useContext, useState } from 'react';
import cep from 'cep-promise';
import myContext from '../Context';
import '../CSS/calendar.css';

const GetCEP = () => {
  const { CEP, setCEP, city, setCity } = useContext(myContext);
  const [message, setMessage] = useState(null);

  return (
    <div className="search-cep">
      <input
        type="text"
        className="form-control cep-mask"
        placeholder="Ex.: 00000-000"
        onChange={(e) => {
          setCEP(e.target.value);
        }}
      />
      <button
        disabled={!/^\d{5}[-]?\d{3}$/.test(CEP)}
        className="button"
        onClick={() =>
          cep(CEP)
            .then((e) => {
              console.log(e);
              setCity(e);
            })
            .catch((e) => {
              setMessage(`${e.message} Tente novamente um CEP valido`);
            })
        }
      >
        Buscar
      </button>
      <p>{message}</p>
    </div>
  );
};

export default GetCEP;
