import React, { useContext, useState } from 'react';
import FormaPagamento from '../components/formasPagamento';
import myContext from '../Context';
import '../CSS/pagamento.css';

function Pagamento(props) {
  const { date, CEP, city, cart } = useContext(myContext);
  const [metod, setMetod] = useState(null);
  const [persona, setPersona] = useState({});
  const [payment, setPayment] = useState('');
  const handlePersona = ({ target: { value, name } }) =>
    setPersona((p) => ({ ...p, [name]: value }));
  return (
    <div className="flex-column">
      <form className="flex-me">
        <label htmlFor="first">Primeiro nome:</label>
        <input name="first" onChange={handlePersona} required />

        <label htmlFor="last">Último nome:</label>
        <input name="last" onChange={handlePersona} required />

        <label htmlFor="email">Email:</label>
        <input name="email" onChange={handlePersona} required />

        <label htmlFor="street">Logradouro:</label>
        <input
          name="street"
          defaultValue={!city ? '' : city.street}
          onChange={handlePersona}
          required
        />

        <label htmlFor="number">Número:</label>
        <input type="number" name="number" onChange={handlePersona} required />

        <label htmlFor="complement">Complemento:</label>
        <input name="complement" onChange={handlePersona} />

        <label htmlFor="neighborhood">Bairro:</label>
        <input
          name="neighborhood"
          defaultValue={!city ? '' : city.neighborhood}
          onChange={handlePersona}
        />

        <label htmlFor="city">Cidade:</label>
        <input
          name="city"
          defaultValue={!city ? '' : city.city}
          onChange={handlePersona}
          required
        />

        <label htmlFor="state">Estado: </label>
        <input
          name="state"
          defaultValue={!city ? '' : city.state}
          onChange={handlePersona}
          required
        />
      </form>
      <div className="orange">
        <form className="flex-me">
          <label>Forma de pagamento:</label>
          <select onClick={(e) => setMetod(e.target.value)}>
            <option value="" disabled>
              Selecione um opcao
            </option>
            <option value="credit">Cartão de crédito</option>
            <option value="boleto">Boleto</option>
            <option value="transfer">Transferência</option>
            <option value="pix">Pix</option>
          </select>
          <FormaPagamento forma={metod} />
          <button
            type="submit"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              props.history.push('/finalizar');
            }}
          >
            Finalizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pagamento;
