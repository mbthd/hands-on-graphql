//PostQueriesQL.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import PostType from './PostTypeQL.js';
import Post from './PostSchema.js';

export default {
	posts: {
		type: new GraphQLList(PostType),
		resolve: Post.getListOfPosts
	},
	post: {
		type: PostType,
		args: {
			id: {
				type: GraphQLID
			}
		},
		resolve: Post.getPostById
	}
};