import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Header from './components/Header/Header';

class App extends Component {
  static defaultProps = {
    post: []
  };

  state = {
    post: dummyData
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <PostContainer posts={this.state.post} />
      </div>
    );
  }
}

export default App
