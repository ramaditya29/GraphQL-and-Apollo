const mongoose = require('mongoose');
const UserModel = mongoose.model('user');
const Company = mongoose.model('company');
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


const resolvers = {
    Query: {
      books: () => books,
      allUsers: async (parentValue, args) => {
        return await UserModel.find({});
      },
      user: async (parentValue, args)  => {
        return  await UserModel.findOneName(args.name);
      },
      company: async (parentValue, { name }) => {
        return await Company.findOne({name: name})
      }
    },
    Mutation: {
        post: (parent, args) => {
            books.push({title: args.title, author: args.author});
            return {title: args.title, author: args.author};
        },
        addUser: (parent, {name, age}) => {
            return (new UserModel({ name, age })).save();
        },
        addCompany: (parent, { name, description}) => {
            return new Company({name ,description}).save();
        }
    }
};

module.exports = resolvers;