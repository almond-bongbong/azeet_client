import React, { useEffect } from 'react';
import styled from 'styled-components';
import kakaoLoginImage from 'static/images/kakao_login_btn.png';
import { alignXY } from 'style/mixin';
import axios from 'axios';

const LoginFormStyle = styled.div`
  ${alignXY};
  text-align: center;
  & p {
    margin-bottom: 15px;
  }
  & .buttons img {
    height: 50px;
  }
`;

const LoginForm = () => {
  const Kakao = typeof window !== 'undefined' && window.Kakao;

  useEffect(() => {
    if (Kakao) Kakao.init('8cd0057a72cb5753848446901c1a0181');
  }, [Kakao]);

  const authKakao = async (accessToken) => {
    const res = await axios({
      method: 'post',
      url: '/auth/kakao',
      headers: { 'x-auth-token': accessToken },
    });

    console.log(res);
  };

  const loginWithKakao = () => {
    Kakao.Auth.login({
      success(authObj) { authKakao(authObj.access_token); },
      fail(err) { console.error(err); },
    });
  };

  return (
    <LoginFormStyle>
      <p>SNS 계정으로 간편하게 시작해 보세요</p>
      <div className="buttons">
        <button type="button" onClick={loginWithKakao}>
          <img src={kakaoLoginImage} alt="Log in with Kakao" />
        </button>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
