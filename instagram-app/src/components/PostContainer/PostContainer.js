import React, { Component } from 'react';
import Post from './Post';
import './postcontainer.css';

function PostContainer({ search, posts }) {
    return (
        <div className='postcontainer'>
            {posts.map((post, index) => (
                <Post search={search} key={index} post={post} />
            ))}
        </div>
    );
}

export default PostContainer
