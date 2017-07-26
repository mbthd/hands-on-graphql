import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { postsListQuery } from './PostsListWithData';


class AddPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  onSend = () => {
    
    this.props.mutate({
      variables: {
        text: this.state.text
      },
      optimisticResponse: {
        addPost: {
          text: this.state.text,
          id: Math.round(Math.random() * -1000000),
          _id: Math.round(Math.random() * -1000000),
          __typename: 'Post',
        },
      },
      update: (store, {data: {addPost}}) => {
        this.setState({text: ''});

        const data = store.readQuery({
          query: postsListQuery,
          variables: {}
        });

        data.posts.push(addPost);

        store.writeQuery({
          query: postsListQuery,
          variables: {},
          data
        });
      }

      
    })
    .then(({ data }) => {
      this.setState({text:''})
    }).catch((error) => {
      console.log('there was an error sending the query', error);
      this.setState({queryError: true});
    });;
  };


  render(){
    return (
      <div>
      <textarea value={this.state.text} onChange={(event)=>this.setState({text: event.target.value})}></textarea>
      <button onClick={this.onSend}>
      Send!
      </button>
      </div>
      );
  }
}

const addPostMutation = gql`
mutation addPost($text: String!) {
  addPost(text: $text) {
    text
    _id
  }
}
`;

const AddPostWithMutation = graphql(
  addPostMutation,
  )(AddPost);

  export default AddPostWithMutation;