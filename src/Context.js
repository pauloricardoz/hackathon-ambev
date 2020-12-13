import React, { createContext, useState } from 'react';

const myContext = createContext();

export function Provider({ children }) {
  const [date, setDate] = useState(new Date());
  const [city, setCity] = useState(null);
  const [CEP, setCEP] = useState(null);
  const [cart, setCart] = useState({});
  const value = {
    date,
    setDate,
    city,
    setCity,
    CEP,
    setCEP,
    cart,
    setCart,
  };
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

export default myContext;
