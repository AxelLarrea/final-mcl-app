import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Error404 from '../components/Error404';
import { useParams } from 'react-router-dom';

const SearchPage = () => {

    const {query} = useParams();

    return (
        <>
            <Header/>
            {query === undefined || query.length === 1 ? <Error404/> : <ProductList search={query}/>}
        </>
    );
}
 
export default SearchPage;