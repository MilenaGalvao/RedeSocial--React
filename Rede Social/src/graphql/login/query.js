import { gql } from "@apollo/client";

export const GET_LOGIN = gql`
  query GET_LOGIN($username: String!) {
    user(where: {username: {_eq: $username}}) {
      id
      name
      password
      username
    }
  }
  `;