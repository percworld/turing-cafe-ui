import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
      date: ''
      time: ''
      guests: ''
    }
  }

  addReservation = event => {
    event.preventDefault();
    this.setState({ id: Date.now(), ...this.state });
    this.emptyField();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='resyForm'>
        <Link to='/' />
        <form>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Date'
            name='date'
            value={this.state.date}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
          <input
            type='text'
            placeholder='Number of Guests'
            name='number'
            value={this.state.number}
            onChange={event => this.handleChange(event)}
          />
          <button></button>

        </form>

      </div>
    )
  }

}

export default Form;