import React, {useState} from 'react';
import ProductList from './ProductList';
import lupa from '../assets/icons/search.png'

const Header = () => {

    //State del input
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // funcion del submit cuando haga enter del Form
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
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

                    <form onSubtmit={handleSubmit}>
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
            <ProductList
                setInputValue={inputValue}
            />
        </>
    );
}
 
export default Header;