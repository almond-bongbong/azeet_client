import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import GlobalStyle from 'style/GlobalStyle';
import { initAxios, setAuthorization } from 'config/configureAxios';
import Header from 'components/Header/Header';
import store from 'store/configure';
import Toast from 'components/Toast';
import { auth } from 'api/auth';
import Cookie from 'js-cookie';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const AUTH_COOKIE = 'authorization';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) { pageProps = await Component.getInitialProps(ctx); }
    return { pageProps };
  }

  componentDidMount() {
    initAxios();

    (async () => {
      const token = Cookie.get(AUTH_COOKIE);
      if (token) {
        setAuthorization();
        try {
          await auth();
        } catch (e) {
          // if (e.status === 401) Cookie.remove(AUTH_COOKIE);
        }
      }
    })();
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

          <link rel="stylesheet" href="/static/css/all.min.css" />
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
