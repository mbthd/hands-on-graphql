import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  buildSchema
  } from 'graphql';

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export default schema;