import React, { useContext, useState } from 'react';
import myContext from '../Context';

function Pagamento() {
  const { date, CEP, city, cart } = useContext(myContext);
  const [metod, setMetod] = useState(null);
  return (
    <div>
      <form>
        <label htmlFor="first">Primeiro nome:</label>
        <input name="first" />

        <label htmlFor="last">Ultimo nome:</label>
        <input name="last" />

        
      </form>
      <form>
        <label>Forma de pagamento:</label>
        <select onClick={(e) => setMetod(e.target.value)}>
          <option value="credit">Cart'ao de cr[edito</option>
          <option value="boleto">Boleto</option>
          <option value="transfer">Transferencia</option>
          <option value="pix">Pix</option>
        </select>
      </form>
    </div>
  );
}

export default Pagamento;
