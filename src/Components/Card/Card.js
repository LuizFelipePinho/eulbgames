import React from 'react'
import './card.css'
import spotlight from './spotlight.jpg'
import like from './like.png'

const Card = () => {
    return (
        <div className="card">
            <div className="boxImg">
                <img src={spotlight} alt="#"></img>
            </div>
            <div className="boxInfo">
                <div className="infos">
                    <p className="nameGame">Satisfactory</p>
                    <p className="priceGame">R$ 41,99</p>
                </div>

                <div className="favorite">
                    <img src={like} alt="" className=""></img>
                </div>
 
            </div>
            
        </div>
    )
}

export default Card
