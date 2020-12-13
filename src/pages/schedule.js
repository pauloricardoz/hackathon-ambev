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
<<<<<<< HEAD
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
=======
      <button data-cy="btn" onClick={() => props.history.push('/pedido')}>Adicionar pedido</button>
>>>>>>> 4ddb80724ebb999b47d49b9eef9b978f2c809c56
    </div>
  );
};

export default Schedule;
