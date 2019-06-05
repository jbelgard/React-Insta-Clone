import React, { Component } from 'react';
import Logo from '../../img/image.png';
import icons from '../../img/icons.png';

const SearchBar = () => {
    return (
        <div style={searchBar_container}>
            <div>
                <img
                    style={image}
                    alt='instagram logo'
                    src={Logo}
                    className='logo-image'
                />
            </div>
            <div>
                <input style={ico} type='text' placeholder='search' />
            </div>
            <div style={social_wrapper}>
                <div style={social}>
                    <i class='far fa-compass' />
                </div>
                <div style={social}>
                    <i class='far fa-heart' />
                </div>
                <div style={social}>
                    <i class='far fa-user' />
                </div>
            </div>
        </div>
    );
};

const ico = {
    fontSize: '18px',
    padding: '0 10px',
    borderRadius: '3px',
    borderStyle: 'none',
    border: '1px lightGray solid'
};
const image = {
    width: '200px'
};
const social = {
    marginRight: '20px'
};
const searchBar_container = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px 0',
    border: '2px solid lightGray'
};
const social_wrapper = {
    display: 'flex',
    fontSize: '25px'
};

export default SearchBar
