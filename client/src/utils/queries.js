import gql from 'graphql-tag';

export const QUERY_THOUGHTS = gql`
    
    query thoughts($username: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions{
                _id
                createdAt
                username
                reactionBody
            }
        }
    }

`;

export const QUERY_USER = gql`

    query user($username: String!){
        _id
        username
        email
        friendCount
        friends {
            _id
            username
        }
        thoughts {
            _id
            thoughtText
            createdAt
            reactionCount
        }
    }
`;