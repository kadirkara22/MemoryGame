import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDisable, randomCards, resetTurn, selectedCard, selectOneCard, selectTwoCard } from '../redux/cardsSlice';
import SingleCard from './SingleCard';
import "./Card.css"

const Cards = () => {

    const cards = useSelector((state) => state.cards.items)
    const selectOne = useSelector((state) => state.cards.selectOne)
    const selectTwo = useSelector((state) => state.cards.selectTwo)
    const disabled = useSelector((state) => state.cards.disabled)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomCards())
        dispatch(selectOneCard(null))
        dispatch(selectTwoCard(null))
    }, [dispatch])


    const handleSelect = (card) => {
        selectOne ? dispatch(selectTwoCard(card)) : dispatch(selectOneCard(card))


    }

    useEffect(() => {

        if (selectOne && selectTwo) {
            dispatch(changeDisable())
            if (selectOne.src === selectTwo.src) {
                dispatch(selectedCard(selectOne))
                dispatch(resetTurn())
            } else {

                setTimeout(() => dispatch(resetTurn()), 1000)
            }
        }
    }, [dispatch, selectOne, selectTwo])




    return (
        <div className="container">
            {
                cards.map(card => (
                    <SingleCard key={card.id}
                        card={card}
                        handleSelect={handleSelect}
                        flipped={card === selectOne || card === selectTwo || card.matched}
                        disabled={disabled}
                    />
                ))
            }




        </div>
    )
}

export default Cards
