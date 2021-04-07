import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Reservations from './../Reservations/Reservations';
import Form from './../Form/Form';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentReservations: [{}, {}],
      displayHome: true
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Route exact path="/" render={() => {
          currentReservations
        }} />
        <Route path="/Form" component={Form} />


      </div>
    )
  }
}

export default App;
