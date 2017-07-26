import React, { Component } from 'react';

import Header from './components/Header';
import PostsListWithData from './components/PostsListWithData';
import AddPostWithMutation from './components/AddPostWithMutation';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Hands on GraphQL"/>
        <AddPostWithMutation />
        <PostsListWithData />
      </div>
    );
  }
}

export default App;
