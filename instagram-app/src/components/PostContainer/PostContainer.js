import React, { Component } from 'react';
import Post from './Post';
import './postcontainer.css';

function PostContainer({ search, posts }) {
    return (
        <PostContainer>
            {posts.map((post, index) => (
                <Post search={search} key={index} post={post} />
            ))}
        </PostContainer>
    );
}

const PostContainer1 = styled.div`
  width: 60%;
  margin: 30px auto;
`;

export default PostContainer
