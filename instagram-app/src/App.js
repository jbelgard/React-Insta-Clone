import React, { Component } from 'react';
import './App.css';
import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login);
class App extends Component {
  render() {
    return (
      <div className='App'>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App
