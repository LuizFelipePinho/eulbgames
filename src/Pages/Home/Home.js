import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import Slider from "../../Components/Slider/Slider";
import Structure from "../../Components/StructureCard/StructureCard";
import Search from "../../Components/Search/Search";


const list = [ 
    {
        name: "GTA V",
        img:  "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png",
        preco: "199,99"
    }, 
    {
        name: "Days Gone",
        img:  "https://playhype.pt/wp-content/uploads/2020/03/Days-Gone-Capa.png",
        preco: "199,99"
    }
]


const Home = () => {
    return (
        <>
        <Header>
            <Search></Search>
        </Header>

        <Container>

            <Slider></Slider>

            <Structure> 

                { list.map((game) =><Card key={game.name} name={game.name} img={game.img} preco={game.preco} />)}
            </Structure>
        </Container>
        
        <Footer></Footer>        
        </>
    )
};

export default Home