import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Accounts/Login';
import Register from './Accounts/Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <div>

            <Switch>

              <Route exact path="/accounts/login" render={(props) => { return <Login  {...props} /> }} />
              <Route exact path="/accounts/register" render={(props) => { return <Register  {...props} /> }} />

              <Route exact path="/" render={(props) => { return <Redirect to="/accounts/login"/> }} />

            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
