import React, { useContext, useEffect, useState } from 'react';
import cep from 'cep-promise';
import 'react-calendar/dist/Calendar.css';
import MyCalendar from '../components/calendar';
import myContext from '../Context';
import '../CSS/calendar.css';
import GetCEP from '../components/getCEP';
import DetalhesData from '../components/detalhesData';

const Schedule = (props) => {
  const { date, CEP, city, setCity } = useContext(myContext);
  console.log(date);
  return (
    <div className="calendar" data-cy="calendly">
      {!city ? <GetCEP /> : <DetalhesData />}
      {city ? (
        <div>
          <span className="alterar-cep">Alterar CEP?</span>
          <button className="button alterar-cep" onClick={() => setCity(null)}>
            Sim
          </button>
        </div>
      ) : null}
      {!city ? null : <MyCalendar />}

      <button
        className="button"
        onClick={() => {
          const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
          console.log(date.getTime());
          props.history.push('/pedido');
        }}
      >
        Adicionar pedido
      </button>
    </div>
  );
};

export default Schedule;
