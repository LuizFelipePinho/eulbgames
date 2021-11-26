import './Slider.css';
import spot from './img1.jpg';
import battle from './battle.jpg'
import alyx from './img2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        <>
        <section className="slider">
            <Carousel>
                <img src={alyx} alt=""/>    
                <img src={battle} alt=""/>    
                <img src={spot} alt=""/>    

            </Carousel>
        
        </section>
        </>
    )
}

export default Slider