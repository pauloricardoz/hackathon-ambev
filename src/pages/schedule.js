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

  console.log(/\d{5}-\d{3}/.test(CEP));
  return (
    <div className="calendar" data-cy="calendly">
      {!city ? <GetCEP /> : <DetalhesData />}
      <br />
      <br />
      <br />
      <MyCalendar />
      <button data-cy="btn" onClick={() => props.history.push('/pedido')}>Adicionar pedido</button>
    </div>
  );
};

export default Schedule;
