
import React from 'react';
import './Reservations.css';
import { Link } from 'react-router-dom';

export default function Reservations({ reservations }) {
    const currentReservations = reservations.map(reservation => {
        return (
            <li>
                <p>Date</p>
                <p>Time</p>
                <p>Table #</p>
                <p>Sunny?</p>
            </li>
        )
    })

    return (
        <div className='resyContainer'>
            <Link to='/Form' >Make a New Reservation</Link>
            <p>Current Reservations</p>
            <ul>
                {currentReservations}
            </ul>
        </div>
    )
}