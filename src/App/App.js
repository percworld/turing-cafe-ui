import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Reservations from './../Reservations/Reservations';
import Form from './../Form/Form';
import { getBookings } from './../utility.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentReservations: [{ id: 2, name: "Leta", date: "4/5", time: "7:00", number: 2 }],
      displayHome: true
    }
  }

  componentDidMount() {
    getBookings().then(response => this.setState({ currentReservations: response }))

  }

  submitNewReservation = event => {
    event.preventDefault

  }

  handleCancel() {

  }

  render() {

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Route path="/Form" component={Form} />
        <Route exact path="/" render={() => (
          <div className='reservations'>
            <Link to='/Form' >Make a New Reservation</Link>
            <p>Current Reservations</p>
            <Reservations reservations={this.state.currentReservations} handleCancel={this.handleCancel} />
          </div>
        )} />


      </div>
    )
  }
}

export default App;
