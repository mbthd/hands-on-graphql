//PostTypeQL.js
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
  } from 'graphql';

import Post from './PostSchema.js';

export default new GraphQLObjectType({
	name: 'Post',
	description: 'A post',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		text: {
			type: GraphQLString
		},
		created:{
			type: GraphQLString
		}
	})
});