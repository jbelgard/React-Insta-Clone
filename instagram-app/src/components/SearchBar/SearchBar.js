import React, { Component } from 'react';
import Logo from '../../img/image.png';
import styled from 'styled-components';

const SearchBar = props => {
    return (
      <SearchBar_container>
        <div>
          <Img
            alt="instagram logo"
            src={Logo}
            className="logo-image"
          />
        </div>
        <InputWrapper>
            <SearchIcon className='fas fa-search' />
            <SearchInput
                type='text'
                placeholder='Search'
                onKeyDown={props.searchPosts}
            />
        </InputWrapper>
        <Social_wrapper>
          <Social>
            <i className="far fa-compass" />
          </Social>
          <Social>
            <i className="far fa-heart" />
          </Social>
          <Social>
            <i className="far fa-user" />
          </Social>
        </Social_wrapper>
      </SearchBar_container>
    );
  };
  
  const Input = styled.input`
    font-size: 18px;
    padding: 0 10px;
    border-radius: 3px;
    border-style: none;
    border: 1px lightGray solid;
  `;
  
  const Img = styled.img`
    width: 200px;
  `;
  
  const Social = styled.div`
    margin-right: 20px;
  `;
  
  const SearchBar_container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    border: 2px solid lightgray;
  `;
  
  const InputWrapper = styled.div`
    width: 300px;
    margin: auto;
    display: flex;
    `;

  const SearchInput = styled.input`
    height: 30px;
    width: 300px;
    text-align: center;
    `;
    const SearchIcon = styled.i`
    position: absolute;
    display: inline;
    top: 33px;
    padding-left: 10px;
  `;
  const Social_wrapper = styled.div`
    display: flex;
    font-size: 25px;
  `;

export default SearchBar
