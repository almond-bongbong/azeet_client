import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithRedux from 'utils/renderWithRedux';
import { alert } from 'components/Feedback';
import Button from 'components/Button/Button';

describe('Alert', () => {
  it('calls alert and close', async () => {
    const { getByText, queryByText } = renderWithRedux(
      <Button text="click" onClick={() => alert('alert')} />,
    );

    const button = getByText('click');
    fireEvent.click(button);
    getByText('alert');

    const closeButton = getByText('확인');
    fireEvent.click(closeButton);
    await wait(() => expect(queryByText('alert')).toBeNull());
  });
});
