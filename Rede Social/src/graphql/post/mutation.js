import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation ADD_POST($image: String!, $text: String!, $userId: uuid!) {
        insert_post(objects: {image: $image, text: $text, user_id: $userId}) {
            affected_rows
        }
    }`;