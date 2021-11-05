import React, {useState, useEffect} from 'react';
import Product from './Product';
import axios from 'axios';

const ProductList = ({search}) => {
    
    const API = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=40`;

    //State de la peticion a la API de MercadoLibre
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get(API);
          const resp = response.data.results;
          setProducts(resp);
        })()
    }, [API]);



    console.log(products);

    return (
        <section className="product-list-container">
            {
                products.map(product => {
                    return <Product
                                product_obj={product}
                                key={product.id}
                           />
                })
            }
        </section>
    );
}
 
export default ProductList;