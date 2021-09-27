// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Router from './router'
import './styles/index.scss'
import store from './redux/store'
import { GRAPHQL_URI } from './config'

const apolloClient = new ApolloClient({
    uri: GRAPHQL_URI,
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>,
    document.getElementById('app'),
)
