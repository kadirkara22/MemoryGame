import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetTurn, selectedCard } from '../redux/cardsSlice'
import "./Card.css"
const SingleCard = ({ card, handleSelect, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleSelect(card)
        }

    }

    return (
        <div className="card">

            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card-font" />
                <div className="back" onClick={handleClick}>?</div>

            </div>


        </div>
    )
}

export default SingleCard
