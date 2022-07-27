import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Importação do BD
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

//Autenticação
import AuthContext from './auth';

ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthContext>
            <App />
        </AuthContext>
    </ApolloProvider>, 
    document.getElementById("root"));