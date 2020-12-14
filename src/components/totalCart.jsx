import React, { useContext } from 'react';
import myContext from '../Context';

function TotalCart() {
  const { cart } = useContext(myContext);
  return (
    <span>
      {Object.entries(cart)
        .reduce((a, c) => a + c[1].qty * c[1].price * 12 , 0)
        .toFixed(2)}
    </span>
  );
}

export default TotalCart;
