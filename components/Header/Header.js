import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  & nav {
    
  }
  
  & button {
    display: block;
  }
`;

const Header = () => (
  <HeaderStyle>
    <nav>
      <Link href="/login"><a href="/login">Login</a></Link>
      <Link href="/about"><a href="/about">About</a></Link>
    </nav>
  </HeaderStyle>
);

export default Header;
