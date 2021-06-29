import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import about from './pages/about';
import Animation2d from './pages/Animation2d';
import Animation3d from './pages/Animation3d';
import Preproduction from './pages/Preproduction';
import ArchitecturalPage from './pages/ArchitecturalPage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/about" component={about} exact />
         <Route path="/pre-production" component={Preproduction} exact />
         <Route path="/architectural" component={ArchitecturalPage} exact />
         <Route path="/Animation2d" component={Animation2d} exact />
         <Route path="/Animation3d" component={Animation3d} exact />
      </Switch>
    </Router>
  );
}

export default App;
