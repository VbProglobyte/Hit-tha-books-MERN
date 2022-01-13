import { gql } from '@apollo/client';
// queries.js: This will hold the query GET_ME, which will execute the me query set up using Apollo Server.

// query_me becomes get_me
export const GET_ME = gql`
  query Getme (){
    me (){
      _id
      title 
      description
      image
      authors
      }
    }
  }
`;
