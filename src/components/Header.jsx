import React from 'react';
import lupa from '../assets/icons/search.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-main">
                <div className="logo">
                    <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus.png" alt="logo"/>
                </div>

                <form>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            name="busqueda"
                            id="busqueda"
                            placeholder="Buscar productos"
                        />
                        <button type="submit">
                            <img src={lupa} alt="lupa"/>
                        </button>
                    </div>
                </form>
            </div>
        </header>
    );
}
 
export default Header;