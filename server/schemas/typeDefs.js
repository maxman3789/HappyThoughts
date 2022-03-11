const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password : String
  }

  type Post {
    _id : ID!
    postText :String!
    postAuthor : String!
    createAt : Date
    comment : [Comments]

  }

  type  Comments {
    _id : ID!
    commentText : String!
    commentAuthor : String!
    createdAt : Date
  }
`;

module.exports = typeDefs;
