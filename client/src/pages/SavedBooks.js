// import React from 'react';
import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

// import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
// //////////////////////////////////////////////////////
// import query and mutation (use)  HOOK
import { useQuery, useMutation } from '@apollo/client'
// //////////////////////////////////////////////////////
import { GET_ME } from '../utils/queries'
import { REMOVE_BOOK } from '../utils/mutations'
// /////////////////////////////////////////////////////
// * Remove the `useEffect()` Hook that sets the state for `UserData`.

// * Instead, use the `useQuery()` Hook to execute the `GET_ME` query on load and save it to a variable named `userData`.

// * Use the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file. (Make sure you keep the `removeBookId()` function in place!)

const SavedBooks = () => {
  // , { error } - dont know why this is giving me errors
  const { userDataLength, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
// GET_ME query 
  const userData = data?.me || [];
  // console.log(userData);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // {data} was giving me issues - removing for now 
      await removeBook({
        variables: { bookId }
      });

      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  // const handleDeleteBook = async (bookId) => {
  //   const [removeBook, { error }] = useMutation(REMOVE_BOOK);
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   console.log(bookId)
  //   if (!token) {
  //     return false;
  //   }


  //   try {
      
     
  //     const { data } = await removeBook({
  //       variables: { bookId },
  //     // upon success, remove book's id from localStorage
  //     removeBookId(bookId)
  //   } catch (err) {
  //     console.error(err);
  //   }
  
  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};
export default SavedBooks;

