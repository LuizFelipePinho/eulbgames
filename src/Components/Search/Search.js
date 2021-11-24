import './Search.css'
import { useState } from 'react';



const Search = () => {

    const [pesquisa, setPesquisa] = useState('');


    const pegaMudaca = (event) => {
        event.preventDefault()
        let valorPesq = event.target.value
        setPesquisa(valorPesq)
    }
    
    const pegaPesquisa = (event) => {
        event.preventDefault()
        console.log('o cliente pesquisou ' + pesquisa)
    
    }
    

    return (
        <>
            <form className="navbar" onSubmit={pegaPesquisa}>
                <input className="inputSearch" placeholder="Buscar" onChange={pegaMudaca}></input>
            </form>
        </>
    )
}

export default Search