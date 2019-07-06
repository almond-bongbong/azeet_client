import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import kakaoLoginImage from 'static/images/kakao_login_btn.png';
import { alignXY } from 'style/mixin';
import { useKakao } from 'hooks';
import { toastActions } from 'store/modules/toast';
import { pendingActions } from 'store/modules/pending';
import { authActions, authTypes } from 'store/modules/auth';
import SimpleLoader from 'components/Loader/SimpleLoader';

const LoginFormStyle = styled.div`
  ${alignXY};
  text-align: center;
  & p {
    margin-bottom: 15px;
  }
  & button {
    display: block;
  }
  & .buttons img {
    height: 49px;
  }
  & .btn_kakao {
    overflow: hidden;
    width: 226px;
    height: 48px; 
    border-radius: 4px;
    background-color: #f7e317;
  }
`;

const LoginForm = () => {
  const Kakao = useKakao();
  const dispatch = useDispatch();
  const kakoPending = useSelector(state => state.pending[authTypes.LOGIN_WITH_KAKAO]);
  const user = useSelector(state => state.auth.user);

  // if (process.browser && user) Router.replace('/');

  const loginKakao = (authResponse) => {
    dispatch(authActions.loginWithKakao(authResponse.access_token));
  };

  const handleKakao = () => {
    dispatch(pendingActions.pending(authTypes.LOGIN_WITH_KAKAO));
    Kakao.Auth.login({
      success: loginKakao,
      fail: () => {
        dispatch(toastActions.toast('문제가 발생했습니다'));
        dispatch(pendingActions.finally(authTypes.LOGIN_WITH_KAKAO));
      },
    });
  };

  return (
    <LoginFormStyle>
      <p>SNS 계정으로 간편하게 시작해 보세요</p>
      <div className="buttons">
        <button className="btn_kakao" type="button" title="kakao login" onClick={handleKakao}>
          {kakoPending ? (
            <SimpleLoader size={25} />
          ) : (
            <img src={kakaoLoginImage} alt="Log in with Kakao" />
          )}
        </button>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
