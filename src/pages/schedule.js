import React, { useContext, useEffect, useState } from 'react';
import cep from 'cep-promise';
import 'react-calendar/dist/Calendar.css';
import MyCalendar from '../components/calendar';
import myContext from '../Context';
import '../CSS/calendar.css';
import GetCEP from '../components/getCEP';
import DetalhesData from '../components/detalhesData';

const Schedule = (props) => {
  const { date, CEP, city } = useContext(myContext);
  console.log(date);
  return (
    <div className="calendar" data-cy="calendly">
      {!city ? <GetCEP /> : <DetalhesData />}
      <MyCalendar />

      <button
        onClick={() => {
          const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
          console.log(date.getTime());
          if (date.getTime) {
            console.log(`data Ruim`);
          }
          props.history.push('/pedido');
        }}
      >
        Adicionar pedido
      </button>
    </div>
  );
};

export default Schedule;
