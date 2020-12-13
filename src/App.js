import { Switch, Route, Link } from 'react-router-dom';
import Main from './pages/main';
import Schedule from './pages/schedule';
import './App.css';
import Pedido from './pages/pedido';
function App() {
  return (
    <div>
      <header>
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
      </header>

      <Switch>
        <Route path="/pedido" component={Pedido} />
        <Route path="/agendamento" component={Schedule} />
        <Route path="/" component={Main} />
      </Switch>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
