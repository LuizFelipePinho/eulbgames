import face from './facebook.png';
import insta from './instagram.png';
import twitt from './twitter.png';
import youtube from './youtube.png';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={face} alt=""/>
            <img src={insta} alt=""/> 
            <img src={twitt} alt=""/> 
            <img src={youtube} alt=""/> 


        </footer>
    )
}
export default Footer