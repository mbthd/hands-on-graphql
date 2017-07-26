import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
  } from 'graphql';

import PostType from './PostTypeQL.js';
import Post from './PostSchema.js';

export default {
	addPost:{
		type: PostType,
		args:{
			text:{
				name:'text',
				type:new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: Post.addPost
	},
	removePost:{
		type: PostType,
		args:{
			id:{
				name:'id',
				type:new GraphQLNonNull(GraphQLID)
			}
		},
		resolve: Post.removePost
	},

};