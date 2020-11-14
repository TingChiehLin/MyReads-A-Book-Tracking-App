import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './Layout';
import App from './App';
import SearchPage from './SearchPage/SearchPage';

function Routes(props) {
    return (
        <Layout>
            <Route path="/" exact component={App}/>
            <Route path="/search" exact component={SearchPage}/>
        </Layout>
    )
}

export default Routes
