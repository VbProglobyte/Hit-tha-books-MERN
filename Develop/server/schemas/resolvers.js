const { AuthenticationError } = require('apollo-server-express'); // added from activity 26
const { Tech, Matchup } = require('../models');
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // added per activity 26 example 
    me: async (parent, { _id }) => {
      return await User.findById({ _id })
    },
    // //////////////////////////////////////////////////////// not sure the point of these
    // tech: async () => {
    //   return Tech.find({});
    // },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },

  Mutation: {
    // added these mutations using the user-controller.js for ref
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parents, { _id, book }) => {
      const updatedUser = User.findByIdAndUpdate(_id,
        {
          $push: {
            savedBooks: book
          }
        })
      return updatedUser
    },
    removeBook: async (parent, { _id, bookId }) => {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { $pull: { savedBooks: { _id: bookId } } }
      )
      return updatedUser
    },
   
  },
};

module.exports = resolvers;
