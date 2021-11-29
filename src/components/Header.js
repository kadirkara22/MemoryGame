import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomCards } from '../redux/cardsSlice'

const Header = () => {
    const cards = useSelector((state) => state.cards.items)
    const dispatch = useDispatch()

    return (
        <div className="header">
            <div className="headerName">Momory Game</div>
            <div className="headerSonuc">
                <div className="toplamPuan">Toplam Puan : {0}</div>
                <button className="button" onClick={() => dispatch(randomCards())}>Yeniden Oyna</button>
            </div>

        </div >
    )
}

export default Header
