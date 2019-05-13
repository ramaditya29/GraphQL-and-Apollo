const { gql } = require('apollo-server');

const typeDefs = gql`
  
  type Book {
    title: String
    author: String
  }

  type Company {
    id: String
    companyName: String
    description: String
  }

  type User{
      id: String
      name: String
      age: Int
  }

  type Query {
    books: [Book]
    user(name: String): User
    company: Company
    allUsers: [User]
  }

  type Mutation{
      post(title: String, author: String): Book
      addUser(name: String , age: Int): User
      addCompany(name: String, description: String): Company
  }
`;

module.exports = typeDefs;