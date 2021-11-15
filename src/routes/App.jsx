import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import SearchPage from '../pages/SearchPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} /> 
                    <Route path='/product-detail/:id' component={ProductDetail}/>
                    <Route path='/search-page/:query' component={SearchPage}/>
                    <Route path='/' component={SearchPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
 
export default App;