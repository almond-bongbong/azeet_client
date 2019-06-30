import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import LoginForm from 'container/LoginForm';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('LoginForm', () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정
  mock.onPost('localhost:8080/auth/kakao').reply(200, {
    accessToken: 'abc',
    tokenType: 'Bearer',
  });

  it('matches snapshot', () => {
    const utils = renderWithRedux(<LoginForm />);
    expect(utils.container).toMatchSnapshot();
  });

  it('login form', () => {
    const { getByTitle, getByAltText } = renderWithRedux(<LoginForm />);
    getByTitle('kakao login');
    getByAltText('Log in with Kakao');
  });
});
