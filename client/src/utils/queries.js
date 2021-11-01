import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      FormData {
          _id
          createdAt
          firstName
          lastName
      }
    }
  }
`;