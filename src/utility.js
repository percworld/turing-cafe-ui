export const getBookings = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
        .then(response => response.json())
}

export const makeBooking = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
        .then(response => response.json())
}