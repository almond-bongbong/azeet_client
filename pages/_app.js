import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import GlobalStyle from 'style/GlobalStyle';
import Header from 'components/Header/Header';
import configStore from 'store/configure';
import Toast from 'components/Toast';
import { auth } from 'api/auth';
import { cookieParser } from 'lib/cookie';
import { authActions } from 'store/modules/auth';
import { alertActions } from 'store/modules/alert';
import { initAxios, setAuthorization } from 'config/configureAxios';
import withReduxSaga from 'next-redux-saga';
import Confirm from 'components/Confirm';
import Alert from 'components/Feedback';
import Layout from 'components/Layout/Layout';
import { makeRedirect } from 'lib/route';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// TODO start 아이콘으로 claps 기능 구현
// TODO 퍼가기, 저장하기 기능 구현

initAxios();

const MyApp = ({ Component, store, pageProps }) => (
  <Container>
    <Head>
      <title>azeet</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap" />
      <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
    </Head>

    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Confirm />
      <Alert />
      <Toast />
    </Provider>
  </Container>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { store, req, isServer } = ctx;
  if (isServer) {
    const { authorization } = cookieParser(req.headers.cookie);
    if (authorization) {
      try {
        setAuthorization(authorization);
        const user = await auth();
        store.dispatch(authActions.setUser(user));
      } catch (e) {
        if (e.status === 500) store.dispatch(alertActions.alert('서버에 문제가 발생했습니다.'));
      }
    }
  }
  const { user } = store.getState().auth;
  let pageProps = {};
  if (Component.getInitialProps) { pageProps = await Component.getInitialProps(ctx); }
  if (pageProps.onlyAnonymous && user) makeRedirect(ctx, '/', false);
  if (pageProps.isPrivate && !user) makeRedirect(ctx, '/login');

  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.shape({}),
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  Component: undefined,
  store: undefined,
  pageProps: undefined,
};

export default withRedux(configStore)(withReduxSaga(MyApp));
