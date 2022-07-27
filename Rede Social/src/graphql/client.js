import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://magnetic-bunny-23.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'jY9G7LI4j6YE37D9yWwMErnG8D9m7N69WIuXuE5zsJp6cJUKwq6Kqe25O0qtNu77'},
    cache: new InMemoryCache()
});

export default client;