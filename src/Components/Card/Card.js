import React from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css'
import like from './like.png'

const Card = ( {name, img, preco, id} ) => {

    const navigate = useNavigate();
    
    const toInfoGame = () => {
        navigate('/infogame', { state: id })
    } 





    return (
        <div className="card">
            <div className="boxImg" onClick={toInfoGame}>
                <img  src={img} alt="#"></img>
            </div>
            <div className="boxInfo">
                <div className="infos">
                    <p className="nameGame">{name}</p>
                    <p className="priceGame">R$ {preco}</p>
                </div>

                <div className="favorite">
                    <img src={like} alt="" className=""></img>
                </div>
 
            </div>
            
        </div>
    )
}

export default Card
