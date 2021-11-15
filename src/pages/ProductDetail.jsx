import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const ProductDetail = () => {
    
    //State para guardar el producto
    const [item, setItem] = useState('');

    //State para guardar la descripción
    const [description, setDescription] = useState('');

    let params = useParams();
    const API = `https://api.mercadolibre.com/items/${params.id}`;
    const APIdes = `https://api.mercadolibre.com/items/${params.id}/description`;

    useEffect(() => {
        (async () => {
          const response = await axios.get(API);
          const resp = response.data;
          const response_des = await axios.get(APIdes);
          const resp_des = response_des.data;
          setDescription(resp_des)
          setItem(resp);
        })()
    }, [API, APIdes]);


    return (
        <>
            <Header/>
            <ItemDetail item={item} description={description}/>
        </>
    );
}

export default ProductDetail;