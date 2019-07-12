import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from 'static/images/logo.svg';
import { clearfix } from 'style/mixin';
import { Icon } from 'antd';
import Thumbnail, { ThumbnailStyle } from '../Thumbnail/Thumbnail';

const HeaderStyle = styled.div`
  ${clearfix};
  padding: 8px 17px 8px 22px;
  background-color: #2b2b2f;
  box-shadow: 0 1px 5px rgba(0,0,0,0.3);
  h1 {
    float: left;
    font-size: 15px;
    img {
      height: 30px;
    }
  }
  button {
    display: block;
  }
  nav {
    float: right;
    color: #eee;
    a {
      display: inline-block;
      padding: 5px;
      font-size: 20px;
      vertical-align: top;
      & + a {
        margin-left: 10px;
      }
    }
  }
  ${ThumbnailStyle} {
    overflow: hidden;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const Header = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <HeaderStyle>
      <h1>
        <Link href="/"><a href="/"><img src={Logo} alt="azeet logo" /></a></Link>
      </h1>
      <nav>
        {user ? (
          <Link href="my">
            <a href="my"><Thumbnail url={user.thumbnailImage} /></a>
          </Link>
        ) : (
          <Link href="/login"><a href="/login"><Icon type="key" /></a></Link>
        )}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
