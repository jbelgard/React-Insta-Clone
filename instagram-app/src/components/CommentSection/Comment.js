import React, { Component } from 'react';


function Comment({ username, text }) {
    return (
        <>
            {' '}
            <p>
                {' '}
                <span>{username}</span> {text}
            </p>
        </>
    );
}

export default Comment;
