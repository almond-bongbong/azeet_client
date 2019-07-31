import React from 'react';
import styled from 'styled-components';
import LoginForm from 'container/LoginForm';

const LoginPageStyle = styled.div`
  
`;

const Login = () => (
  <LoginPageStyle>
    <LoginForm />
  </LoginPageStyle>
);

Login.getInitialProps = () => ({ onlyAnonymous: true });

export default Login;
