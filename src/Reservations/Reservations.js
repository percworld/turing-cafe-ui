
import React from 'react';
import './Reservations.css';
//import { Link } from 'react-router-dom';
import Card from './../Card/Card'

export default function Reservations({ reservations, handleCancel }) {
    const currentReservations = reservations.map(reservation => {
        return (
            <Card props={reservation} handleCancel={handleCancel} key={reservation.id} />
        )
    })

    return (
        <div className='resyContainer'>
            <ul className='resyList'>
                {currentReservations}
            </ul>
        </div>
    )
}