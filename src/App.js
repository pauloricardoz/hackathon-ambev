import { Switch, Route, Link } from 'react-router-dom';
import Main from './pages/main';
import Schedule from './pages/schedule';
import './App.css';
import Pedido from './pages/pedido';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagamento from './pages/pagamento';
import Finalizar from './pages/Finalizar';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/Pagamento" component={Pagamento} />
        <Route path="/pedido" component={Pedido} />
        <Route path="/agendamento" component={Schedule} />
        <Route path="/finalizar" component={Finalizar} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
