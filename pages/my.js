import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Profile, { MyProfileStyle } from 'container/MyProfile/MyProfile';

const MyStyle = styled.div`
  ${MyProfileStyle} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const My = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <MyStyle>
      <Profile user={user} />
    </MyStyle>
  );
};

My.getInitialProps = () => ({ isPrivate: true });

export default My;
