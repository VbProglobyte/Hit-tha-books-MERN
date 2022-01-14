import { gql } from '@apollo/client';
//  use user-controller for correct name {USER, BOOK}
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
// save book
// mutation addThought($thoughtText: String!) {
//   addThought(thoughtText: $thoughtText) {
export const SAVE_BOOK = gql`
  mutation SaveBook($_id: ID!, $book: BookInput!){
    saveBook(_id: $_id, book: $book) {
      _id
      username
      email
      savedBooks {
          title
      }
    }
  }
`;
// remove book 
// mutation addComment($thoughtId: ID!, $commentText: String!) {
//   addComment(thoughtId: $thoughtId, commentText: $commentText) {
export const REMOVE_BOOK = gql`
mutation addComment($thoughtId: ID!, $commentText: String!) {
  addComment(thoughtId: $thoughtId, commentText: $commentText) {
mutation RemoveBook($_id: ID!, $bookId: String!){
  removeBook(_id: $_id, bookId: $bookId){
      _id
      savedBooks {
        title
    }
    }
  }
`;
