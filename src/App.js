import './App.css';
import { Todolist } from './ToDoList/Todolist';
import Navigator from './views/Navigator';
import { Calculator } from './Calculator/Calculator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
          <Route path="/todo" exact>
            <Todolist />
          </Route>

          <Route path="/calculator" exact>
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
