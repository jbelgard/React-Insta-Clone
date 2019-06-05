import React, { Component } from 'react';
import Post from './Post';
import './postcontainer.css';

function PostContainer({ posts }) {
    return (
        <div className='postcontainer'>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default PostContainer
