import './Slider.css';
import capaCs from './capa-csgo.jpg'
import spot from './img1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        <>
        <section className="slider">
            <Carousel>
                 <img src={capaCs} alt=""/>    


                <img src={spot} alt=""/>    

            
            </Carousel>
        
        </section>
        </>
    )
}

export default Slider