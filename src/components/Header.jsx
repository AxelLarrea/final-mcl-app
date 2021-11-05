import React, {useState} from 'react';
import lupa from '../assets/icons/search.png'

const Header = ({setSearch}) => {

    //State del input
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // funcion del submit cuando haga enter del Form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 1) {
            setSearch(inputValue)
            setInputValue('')
        }
    }

    return (
        <>
            <header className="header">
                <div className="header-main">
                    <div className="logo">
                        <a href="/"><img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus.png" alt="logo"/></a>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="search-bar">
                            <input 
                                type="text" 
                                name="busqueda"
                                value={inputValue}
                                id="busqueda"
                                placeholder="Buscar productos"
                                onChange={handleInputChange}
                            />
                            <button type="submit">
                                <img src={lupa} alt="lupa"/>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}
 
export default Header;