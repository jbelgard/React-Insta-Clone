import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PostsPage />
      </div>
    );
  }
}

export default App
