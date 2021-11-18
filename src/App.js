// import Card from "./Components/Card/Card";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header"
import Slider from "./Components/Slider/Slider";
import './reset.css'


const App = () => {
    return (
        <>
        <Header></Header>

        <Container>
            <Slider></Slider>
            {/* <Card></Card> */}
        </Container>
        
        </>
    )
};

export default App