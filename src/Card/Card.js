import React from 'react';
import './Card.css';

export default function Card({ props, handleCancel }) {
    return (
        <div className='card'>
            <p>Name: {`${props.name}`}</p>
            <p>Date: {`${props.date}`}</p>
            <p>Time: {`${props.time}`}</p>
            <p>Guests: {`${props.number}`}</p>
            <button onSubmit={handleCancel}>Cancel</button>
        </div>
    )
}