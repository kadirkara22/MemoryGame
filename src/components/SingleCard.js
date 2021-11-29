import React from 'react'
import "./Card.css"
const SingleCard = ({ card }) => {
    return (
        <div className="card">
            <div>
                <div className="back">?</div>
                <img className="front" src={card.src} alt="card-font" />
            </div>
        </div>
    )
}

export default SingleCard
