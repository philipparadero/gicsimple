import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './pages/Buttons/Button'

function Card({img, description, alt}) {
    return (
        <div className="card__container">
            <img src={img} alt={alt} className="card__image"/>
            <div className="card__description">{description}</div>
            <Link to='/features'><Button buttonStyle='btn--round'>Learn More</Button></Link>
        </div>
    )
}

export default Card
