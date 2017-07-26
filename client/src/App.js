import React, { Component } from 'react';

import Header from './components/Header';
import PostsListWithData from './components/PostsListWithData';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Hands on GraphQL"/>
        <PostForm />
        <PostsListWithData />
      </div>
    );
  }
}

export default App;
