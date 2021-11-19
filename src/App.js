import Card from "./Components/Card/Card";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Slider from "./Components/Slider/Slider";
import Structure from "./Components/StructureCard/StructureCard";
import './reset.css'


const App = () => {
    return (
        <>
        <Header></Header>

        <Container>
            <Slider></Slider>

            <Structure> 
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </Structure>
        </Container>
        
        <Footer></Footer>        
        </>
    )
};

export default App