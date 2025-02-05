import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Countdown from "./Countdown"; // Asegúrate de que la ruta sea correcta
import About from "./about";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Countdown} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
