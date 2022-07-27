import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation ADD_USER($name: String!, $password: String!, $username: String!) {
        insert_user(objects: {name: $name, password: $password, username: $username}) {
            returning {
                id
                name
                username
            }
        }
    }`;