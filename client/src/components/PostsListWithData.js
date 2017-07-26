import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

const PostsList = ({ data: {loading, error, posts }}) => {
	if (loading) return <p>Loading ...</p>;
  	if (error) return <p>{error.message}</p>;
  
  	if (posts.length > 0 ){
  		return (
			<div>
			    { posts.map( p =>
			        (<div key={p.id}>
			            {p.text}
			        </div>)
			    )}
			 </div>
  			)

  	}else{
  		return <p>no hay post</p>;
  	}
}

export const postsListQuery = gql`
  query PostsListQuery {
    posts {
      _id
      text
    }
  }
`;

export default graphql(postsListQuery, {
 // options: { pollInterval: 5000 },
})(PostsList);
