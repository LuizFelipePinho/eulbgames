import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import Slider from "../../Components/Slider/Slider";
import Structure from "../../Components/StructureCard/StructureCard";
import Search from "../../Components/Search/Search";
import axios from 'axios';
import { useState, useEffect } from "react";


const Home = () => {

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


    return (
        <>
        <Header>
            <Search></Search>
        </Header>

        <Container>

            <Slider></Slider>

            <Structure> 

                { gamesDados.map((game) =><Card key={game.id} name={game.name} img={game.image} preco={game.price} />)}
            </Structure>
        </Container>
        
        <Footer></Footer>        
        </>
    )
};

export default Home