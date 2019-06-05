import React, { Component } from 'react';

function Post({ img }) {
    return (
        <div>
            <img src={img} alt='' />
        </div>
    );
}

export default Post
