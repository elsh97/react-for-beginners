import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movie">
            <Detail />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
