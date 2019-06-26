import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  padding: 10px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.3);
  & h1 {
    font-size: 15px;
  }
  
  & button {
    display: block;
  }
`;

const Header = () => (
  <HeaderStyle>
    <h1>LOGO</h1>
    <nav>
      <Link href="/login"><a href="/login">Login</a></Link>
      <Link href="/about"><a href="/about">About</a></Link>
    </nav>
  </HeaderStyle>
);

export default Header;
