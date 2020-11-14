import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './Layout';
import App from './App';
import Search from './Search/Search';

function Routes(props) {
    return (
        <Layout>
            <Route path="/" exact component={App}/>
            <Route path="/search" exact componet={Search}/>
        </Layout>
    )
}

export default Routes
