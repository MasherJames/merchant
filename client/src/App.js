import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import AppRouter from './routes';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:5000/graphql/'
});

const client = new ApolloClient({
    cache,
    link
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <AppRouter />
        </ApolloProvider>
    )
}
export default App;