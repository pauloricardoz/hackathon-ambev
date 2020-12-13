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

        <label htmlFor="last">Último nome:</label>
        <input name="last" />

        <label htmlFor="street">Lougradouro:</label>
        <input name="street" defaultValue={city.street} />

        <label htmlFor="neighborhood">Bairro:</label>
        <input name="neighborhood" defaultValue={city.neighborhood} />

        <label htmlFor="number">Numero:</label>
        <input type="number" name="number" />

        <label htmlFor="complement">Complemento:</label>
        <input name="complement" />

        <label htmlFor="city">Cidade:</label>
        <input name="city" defaultValue={city.city} />

        <label htmlFor="state">Estado: </label>
        <input name="state" defaultValue={city.state} />
      </form>
      <form>
        <label>Forma de pagamento:</label>
        <select onClick={(e) => setMetod(e.target.value)}>
          <option value="credit">Cartão de crédito</option>
          <option value="boleto">Boleto</option>
          <option value="transfer">Transferência</option>
          <option value="pix">Pix</option>
        </select>
      </form>
    </div>
  );
}

export default Pagamento;
