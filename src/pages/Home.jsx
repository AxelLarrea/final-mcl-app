import React, {useState} from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Home = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch}/>
      {search ? <ProductList search={search}/> : <ProductList/>}
    </>
  );
}
 
export default Home;