import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from './pages/Loginpage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {checkTokenOnRefresh} from './store/auth/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkTokenOnRefresh);
  }, [])

  return (
    <div className="App">
      <a href='/'>Home</a>
      <a href='/login'>Login</a>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Loginpage} />
      </Switch>
    </div>
  );
}

export default App;
