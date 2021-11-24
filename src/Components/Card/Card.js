import React from 'react'
import './card.css'
// import spotlight from './spotlight.jpg'
import like from './like.png'

const Card = ( {name, img, preco} ) => {
    return (
        <div className="card">
            <div className="boxImg">
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
