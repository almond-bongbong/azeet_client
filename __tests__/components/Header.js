import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import Header from 'components/Header/Header';

describe('Header', () => {
  const auth = { user: { id: 1, nickname: '길동' } };

  it('matches snapshot', () => {
    const utils = renderWithRedux(<Header />);
    expect(utils.container).toMatchSnapshot();
  });

  it('logged in user', () => {
    const { queryByText, getByAltText } = renderWithRedux(<Header />, { auth });
    const loginButton = queryByText('Login');
    getByAltText('thumbnail');
    expect(loginButton).toBeNull();
  });
});
