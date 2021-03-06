const express = require('express');
const path = require('path');
// require the apollo server
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const routes = require('./routes');
// require the schema 
// const { typeDefs, resolvers } = require('./schemas');
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
// appolo server variable label "server"  includes args {typeDefs, resolvers}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/books',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   },
// );

// middleware express server
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// open on local host with graphql - server can't be reached ${server.graphqlPath}
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`));
  // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

