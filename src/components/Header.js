import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomCards } from '../redux/cardsSlice'

const Header = () => {
    const cards = useSelector((state) => state.cards.items)
    const puan = useSelector((state) => state.cards.puan)
    const turn = useSelector((state) => state.cards.turn)
    const count = useSelector((state) => state.cards.count)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div className="header">
            <div className="headerName" style={{ color: "blue" }}>Momory Game</div>
            <div className="headerSonuc">
                <div className="sonuc">
                    <div className="toplamPuan" style={{ color: "white" }}>Toplam Puan : {puan}</div>
                    <div className="tur">Toplam Tur: {turn}</div>
                </div>
                {
                    count === 30 ? <button className="button" onClick={() => dispatch(randomCards())}>Yeniden Oyna</button>
                        : null
                }

            </div>

        </div >
    )
}

export default Header
