import Card from '../Card/Card';
import axios from 'axios';
import { useState, useEffect } from "react";

const CardFilledApi = () => {
    
    const [ gamesDados, setGamesDados ] = useState([]);


    const getAxios = async () => {
        await axios.get('https://nintendo-shop.herokuapp.com/game/findMany')
        .then( res => {
            setGamesDados(res.data)
        }).catch( (err) => console.log(err))
    }
    
    useEffect(() => {
        getAxios()
    }, [])

    return(
        <>
        { gamesDados.map((game) => <Card key={game.id} id={game.id} name={game.name} img={game.image} preco={game.price}  />)}
        </>

    )
}

export default CardFilledApi;