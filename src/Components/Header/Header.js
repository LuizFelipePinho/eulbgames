import './Header.css'
import { Link } from "react-router-dom";


const Header = ( { children } ) => {
    return (
        <header className="header">
            <p className="title"><b className="mainName">Eulb</b> Games</p>

                { children }

            <div className="links">
                <Link to="/" className="home">Home</Link>
                <Link to="/login" className="login">Login</Link>
             </div>


        </header>
    )
}

export default Header