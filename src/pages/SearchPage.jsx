import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

const SearchPage = () => {

    const params = useParams();

    return (
        <>
            <Header/>
            <ProductList search={`${params.query}`} />
        </>
    );
}
 
export default SearchPage;