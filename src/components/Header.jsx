import fotoBanner from '../images/fotoBanner.png';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div>
        <img className="logo" alt="Banner Principal" src={fotoBanner} />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agendamento">Agendamento</Link>
          </li>
          <li>
            <Link to="/pedido">Pedido</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
