import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Container from "../../Components/Container/Container";
import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react'
import axios from 'axios';
import InfoCard from "../../Components/InfoCard./InfoCard";


const InfoGame = () => {

    const [ game, setGame] = useState("");

    const state = useLocation()
    const id = state.state;


   useEffect( () => {
        axios.get(`https://nintendo-shop.herokuapp.com/game/find/${id}`)
        .then( (res) => setGame(res.data))

    }, []);


console.log(game);
    return (
        <>
            <Header></Header>
                <Container>
                <InfoCard
                image={game.image}
                name={game.name} 
                price={game.price}
                storyline= {game.storyline}
                year = {game.year}

                ></InfoCard>


                </Container>
            <Footer></Footer>
        </>
    )
}

export default InfoGame;