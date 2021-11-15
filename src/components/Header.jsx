import React, {useState} from 'react';
import lupa from '../assets/icons/search.png';
import {Link} from 'react-router-dom';


const Header = () => {

    //State del input
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }


    // funcion del submit cuando haga enter del Form
    const url = '/search-page/';

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1) {
            setInputValue('');
        }
    }


    console.log(inputValue);
    let final_url = url + inputValue;


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
                                minLength="1"
                            />

                            <Link to={final_url}>
                                <button type="submit">
                                    <img src={lupa} alt="lupa"/>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}
 
export default Header;