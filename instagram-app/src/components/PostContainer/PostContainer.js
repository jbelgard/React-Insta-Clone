import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import User from './User';

function PostContainer({ posts }) {
    return (
        <>
            {posts.map((post, index) => (
                <div key={index}>
                    {' '}
                    <User img={post.thumbnailUrl} name={post.username} />
                    <Post img={post.imageUrl} />
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </>
    );
}

export default PostContainer
