import Card from '../Card/Card';
import axios from 'axios';
import { useState, useEffect } from "react";

const CardFilledApi = () => {
    
    const [ gamesDados, setGamesDados ] = useState([]);

    const [ callHim, setCallHim] = useState(false);

    const  getAxios = async () => {
        await axios.get('https://nintendo-shop.herokuapp.com/game/findMany')
        .then( res => {
            setGamesDados(res.data)
        })
    }

    useEffect(() => {
        setCallHim(true)
        getAxios()
    }, [])

    console.log(gamesDados);

    
    
    return(
        <>
        { gamesDados.map((game) =><Card key={game.id} name={game.name} img={game.image} preco={game.price} />)}
        </>

    )
}

export default CardFilledApi;