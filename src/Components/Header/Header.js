import Search from '../Search/Search'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <p className="title"><b className="mainName">Eulb</b> Games</p>

            <Search></Search>
            
        </header>
    )
}

export default Header