import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import register from './Register/Register';
import loginScreen from './Login/Loginscreen';
 
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
           <div className="content">
          <Switch>
            <Route path="/" component={loginScreen} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={register} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
