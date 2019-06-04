import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuid from 'uuid';
import './PostContainer.css';
import commentSection from '../CommentSection/CommentSection';

const postContainer = props => {
    const {
        comments,
        imageUrl,
        likes,
        thumbnailUrl,
        timestamp,
        username
    } = props.data;
    const timestampDate = Date.parse(timestamp.replace("th", ""));
    return (
        <div className='postContainer'>
            <div className='user-container'>
                <img src={thumbnailUrl} alt='profile' />
                <p>{username}</p>
            </div>
            <img className='main_image' src={imageUrl} alt='banner' />
            <i className='far fa-heart' />
            <i className='far fa-comment' />
            <p className='likes'>{likes} likes</p>
            {comments.map(comment => {
                return <commentSection key={uuid()} comment={comment} />;
            })}
            <p className='timestamp'>{moment(timestampDate).fromNow()}</p>
            <div className='horizontal' />
            <div className='comment-bottom'>
                <input className='search' type='text' placeholder='Add a comment...' />
                <p className='three-dots'>&#8230;</p>
            </div>
        </div>
    );
};
postContainer.propTypes = {
    data: PropTypes.shape({
        comments: PropTypes.array.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
};

export default postContainer
