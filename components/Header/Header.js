import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { clearfix } from 'style/mixin';
import UserThumbnail from '../Thumbnail/UserThumbnail';

const HeaderStyle = styled.div`
  ${clearfix};
  padding: 10px 20px;
  background-color: #2b2b2f;
  box-shadow: 0 1px 5px rgba(0,0,0,0.3);
  & h1 {
    float: left;
    font-size: 15px;
  }
  
  & button {
    display: block;
  }
  
  & nav {
    float: right;
    > a + a {
      margin-left: 10px;
    }
  }
`;

const Header = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <HeaderStyle>
      <h1>
        <Link href="/"><a href="/">LOGO</a></Link>
      </h1>
      <nav>
        <Link href="/about"><a href="/about">About</a></Link>
        {user ? (
          <Link href="/my"><a href="/login"><UserThumbnail url={user.thumbnailImage} /></a></Link>
        ) : (
          <Link href="/login"><a href="/login">Login</a></Link>
        )}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
