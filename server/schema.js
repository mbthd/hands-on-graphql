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

import Post from './Models/Post/PostSchema.js';

import {
	PostQueries,
	PostMutations,
	PostType
} from './Models/Post/PostQL.js';

let RootQuery = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		post: PostQueries.post,
		posts: PostQueries.posts,
	})
});

let RootMutation = new GraphQLObjectType({
	name: "Mutation",
	fields: () => ({
		addPost: PostMutations.addPost,
		removePost: PostMutations.removePost,
	})
});

let schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation
});

export default schema;