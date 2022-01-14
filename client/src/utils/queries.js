import { gql } from '@apollo/client';
// queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

// query_me becomes get_me ($_id: ID!) - user : username, savedBooks 
export const GET_ME = gql`
  query Getme ($_id: ID!){
    me ($_id: ID!){
      username
      savedBooks {
      _id
      title 
      description
      image
      authors
      }
    }
  }
`;
