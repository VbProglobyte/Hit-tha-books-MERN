# Hit-tha-books-MERN

A MERN book search engine that needs a refactor for the API to use GraphQL on the back end and add some functionality to the front end.

## NOTE :
this app is not functioning correctly. 
![image](https://user-images.githubusercontent.com/83515305/150402233-42f62b83-a82e-4e16-af27-103cb3fbc3e9.png)

I'm actually not sure why this is happening, but Heroku does indeed build the app with 0 errors.
![image](https://user-images.githubusercontent.com/83515305/150402864-b2c4c242-9194-4183-b0a6-90b53f91f7b7.png)

But, I get a weird PORT error with nodemon - my PORT is 3001, so I don't know why it wants to connect to 3000.
I have tried to use killtask commands, but none have worked so far ...
![image](https://user-images.githubusercontent.com/83515305/150402760-5355b1e5-7c57-4764-8bba-75224e7c02a3.png)

If anyone has had these errors and has fixed them please let me know. I'd like to fix these weird errors so I can sleep at night. :P
![image](https://user-images.githubusercontent.com/83515305/150403130-968cd15b-b4a5-4c48-91fb-d7cf5c94b5cc.png)

## Tech

    - NPM
    - Node
    - Apollo Server
    - Mongo DB
    - Heroku
    - Mongoose 
    - Express
    - GraphQL

## Installation

1. npm install in root, client, server folders 
2. npm run build (makes a build folder in the client folder)
3. npm run develop (should launch the app)

## Usage 

    1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

    2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

    3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

    4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas.

## REF
   
https://graphql.org/graphql-js/authentication-and-express-middleware/

https://mongoosejs.com/docs/models.html

https://reactjs.org/docs/hooks-reference.html#usereducer

https://devcenter.heroku.com/articles/git#creating-a-heroku-remote
