import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import GlobalStyle from 'style/GlobalStyle';
import { initAxios } from 'config/configureAxios';
import Header from 'components/Header/Header';
import store from 'store/configure';
import Toast from 'components/Toast';
import { authActions } from 'store/modules/auth';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) { pageProps = await Component.getInitialProps(ctx); }
    return { pageProps };
  }

  componentDidMount() {
    initAxios();
    store.dispatch(authActions.auth());
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>azeet</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap" />

          <script src="//developers.kakao.com/sdk/js/kakao.min.js" />

          <GlobalStyle />
        </Head>

        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
          <Toast />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
