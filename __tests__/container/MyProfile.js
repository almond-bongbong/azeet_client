import React from 'react';
import renderWithRedux from 'utils/renderWithRedux';
import { fireEvent, waitForElement } from '@testing-library/react';
import MyProfile from 'container/MyProfile';

describe('MyProfile', () => {
  const mockUser = {
    nickname: 'cmlee',
    profileImage: 'https://placeimg.com/600/300/any',
  };

  it('matches snapshot', () => {
    const utils = renderWithRedux(<MyProfile />);
    expect(utils.container).toMatchSnapshot();
  });

  it('login form', async () => {
    const { getByText } = renderWithRedux(<MyProfile user={mockUser} />);
    getByText('cmlee');
    const btnLogout = getByText('로그아웃');

    fireEvent.click(btnLogout);

    const confirm = await waitForElement(() => getByText('정말 로그아웃 하시겠습니까?'));
    const btnYes = await waitForElement(() => getByText('확인'));

    expect(confirm).not.toBeNull();
    expect(btnYes).not.toBeNull();
  });
});
