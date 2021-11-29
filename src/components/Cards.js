import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomCards } from '../redux/cardsSlice';
import SingleCard from './SingleCard';
import "./Card.css"

const Cards = () => {
    const [turn, setTurn] = useState(0);
    const [selectOne, setSelectOne] = useState(null);
    const [selectTwo, setSelectTwo] = useState(null);


    const cards = useSelector((state) => state.cards.items)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomCards())
        setTurn(0)
    }, [dispatch])
    console.log(cards)
    return (
        <div className="container">
            {
                cards.map(card => (
                    <SingleCard key={card.id} card={card} />
                ))
            }




        </div>
    )
}

export default Cards
