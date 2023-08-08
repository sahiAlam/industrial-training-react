import React from "react"

const cities = [
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Bengaluru",
]

const ListGroup = () => {
  return (
    <div>
        <ul className="list-group">
            {cities.map(city => <li key={city}>{city}</li>)}
        </ul>
    </div>
  )
}

export default ListGroup