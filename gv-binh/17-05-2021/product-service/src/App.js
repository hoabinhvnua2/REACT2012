import logo from "./logo.svg";
import "./App.scss";
import SignIn from "./components/SignIn";
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import {PrivateAuth} from './common/PrivateAuth';
import Home from './components/Home';
import { history } from "./helps/history";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PrivateAuth exact path='/' component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
