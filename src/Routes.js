import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './Layout';
import App from './App';

function Routes() {
    return (
        <Layout>
            <Route path="/" exact component={App}/>
        </Layout>
    )
}

export default Routes
