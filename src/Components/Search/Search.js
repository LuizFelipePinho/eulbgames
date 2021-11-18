import iconSearch from './search.png'
import './Search.css'

const Search = () => {
    return (
        <>
            <nav className="navbar">
                <input className="inputSearch" placeholder="Buscar"></input>
                <div className="iconSeach"> 
                    <img src={iconSearch} ></img>
                </div>
            </nav>
        </>
    )
}

export default Search