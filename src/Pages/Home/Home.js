import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import Slider from "../../Components/Slider/Slider";
import Structure from "../../Components/StructureCard/StructureCard";
import Search from "../../Components/Search/Search";
import CardFilledApi from '../../Components/CardFilledApi/CardFilledApi'


const Home = () => {

    return (
        <>
        <Header>
            <Search></Search>
        </Header>

        <Container>

            <Slider></Slider>

            <Structure> 
              <CardFilledApi />
            </Structure>
        </Container> 
        
        <Footer></Footer>        
        </>
    )
};

export default Home